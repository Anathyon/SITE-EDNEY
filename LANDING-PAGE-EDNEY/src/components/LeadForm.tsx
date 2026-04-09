import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BadgeCheck } from "lucide-react";
import { CTAButton } from "./ui";
import { useBreakpoint } from "../hooks/useBreakpoint";

interface FormState {
  nome: string;
  whatsapp: string;
  email: string;
  projeto: string;
  mensagem: string;
}

const initialState: FormState = { nome: "", whatsapp: "", email: "", projeto: "", mensagem: "" };

const inputClass =
  "h-12 w-full rounded-xl border border-white/10 bg-white/4 text-sm text-white outline-none transition placeholder:text-zinc-500 focus:border-yellow-400/40 focus:bg-white/6 sm:rounded-2xl";

export function LeadForm() {
  const [formData, setFormData] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);
  const bp = useBreakpoint();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (field: keyof FormState, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (error) setError(null);
  };

  const validateForm = () => {
    if (!formData.nome.trim()) return "O nome é obrigatório.";
    if (!formData.whatsapp.trim() || formData.whatsapp.length < 10) return "WhatsApp inválido.";
    if (!formData.email.includes("@")) return "E-mail inválido.";
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      // 1. Enviar para o Email via FormSubmit
      const response = await fetch("https://formsubmit.co/ajax/edneypro@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          Nome: formData.nome,
          WhatsApp: formData.whatsapp,
          Email: formData.email,
          "Projeto/Cidade": formData.projeto,
          Mensagem: formData.mensagem,
          _subject: `Novo contato: ${formData.nome}`,
        }),
      });

      if (!response.ok) {
        throw new Error("Erro ao enviar para o email.");
      }

      // 2. Preparar mensagem do WhatsApp
      const waMessage = `Olá Edney, recebi um novo contato pelo site:

*Nome:* ${formData.nome}
*WhatsApp:* ${formData.whatsapp}
*E-mail:* ${formData.email}
*Projeto/Cidade:* ${formData.projeto}
*Mensagem:* ${formData.mensagem}`;

      const encodedMessage = encodeURIComponent(waMessage);
      const whatsappUrl = `https://wa.me/558592175196?text=${encodedMessage}`;

      // 3. Sucesso e redirecionamento
      setSubmitted(true);
      window.open(whatsappUrl, "_blank");
      
      setFormData(initialState);
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      setError("Ocorreu um erro ao enviar sua mensagem. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  // Responsive Styles
  const formPadding = bp === "none" ? "20px" :
                      bp === "sm"   ? "24px" :
                                      "32px";
  
  const headerMarginBottom = bp === "none" ? "20px" : "24px";
  const fieldGap = bp === "none" ? "12px" : "16px";
  const actionsGap = bp === "none" ? "10px" : "12px";

  return (
    <div 
      className="rounded-2xl border border-white/10 bg-white/4 sm:rounded-[2.25rem]"
      style={{ padding: formPadding }}
    >
      <div className="flex flex-col items-center text-center" style={{ marginBottom: headerMarginBottom }}>
        <div className="text-xs font-semibold uppercase tracking-[0.2em] text-yellow-300 sm:tracking-[0.22em]">Solicite contato</div>
        <h3 className="text-xl font-black uppercase text-white sm:text-2xl" style={{ marginTop: "12px" }}>Fale sobre o seu projeto</h3>
        <p className="text-sm leading-7 text-zinc-300" style={{ marginTop: bp === "none" ? "8px" : "12px" }}>Descreva rapidamente o cenário, objetivo e necessidade.</p>
      </div>

      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="flex flex-col items-center justify-center text-center"
            style={{ minHeight: bp === "none" ? "280px" : "340px" }}
          >
            <div 
              className="flex items-center justify-center rounded-full bg-green-500/20"
              style={{ width: bp === "none" ? "56px" : "64px", height: bp === "none" ? "56px" : "64px", marginBottom: "16px" }}
            >
              <BadgeCheck className="h-7 w-7 text-green-400 sm:h-8 sm:w-8" />
            </div>
            <h4 className="text-lg font-bold text-white sm:text-xl">Mensagem enviada!</h4>
            <p className="text-sm text-zinc-300" style={{ marginTop: "8px" }}>Edney receberá sua mensagem em breve.</p>
          </motion.div>
        ) : (
          <motion.form 
            key="form" 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            onSubmit={handleSubmit} 
            className="flex flex-col"
            style={{ gap: fieldGap }}
          >
            <input
              type="text"
              name="nome"
              required
              placeholder="Seu nome"
              value={formData.nome}
              onChange={(e) => handleChange("nome", e.target.value)}
              className={inputClass}
              style={{ paddingLeft: "16px", paddingRight: "16px" }}
              disabled={loading}
            />
            <div 
              className={`grid ${bp !== "none" ? "sm:grid-cols-2" : ""}`}
              style={{ gap: fieldGap }}
            >
              <input 
                type="text" 
                name="whatsapp"
                placeholder="WhatsApp" 
                value={formData.whatsapp} 
                onChange={(e) => handleChange("whatsapp", e.target.value)} 
                className={inputClass} 
                style={{ paddingLeft: "16px", paddingRight: "16px" }}
                disabled={loading}
              />
              <input 
                type="email" 
                name="email"
                placeholder="E-mail" 
                value={formData.email} 
                onChange={(e) => handleChange("email", e.target.value)} 
                className={inputClass} 
                style={{ paddingLeft: "16px", paddingRight: "16px" }}
                disabled={loading}
              />
            </div>
            <input 
              type="text" 
              name="projeto"
              placeholder="Cidade / projeto / mandato" 
              value={formData.projeto} 
              onChange={(e) => handleChange("projeto", e.target.value)} 
              className={inputClass} 
              style={{ paddingLeft: "16px", paddingRight: "16px" }}
              disabled={loading}
            />
            <textarea
              name="mensagem"
              placeholder="Descreva seu cenário, necessidade ou objetivo"
              value={formData.mensagem}
              onChange={(e) => handleChange("mensagem", e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-white/4 text-sm text-white outline-none transition placeholder:text-zinc-500 focus:border-yellow-400/40 focus:bg-white/6 sm:rounded-2xl"
              style={{ minHeight: bp === "none" ? "100px" : "130px", padding: "12px 16px" }}
              disabled={loading}
            />
            
            {error && (
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xs font-semibold text-red-400">
                {error}
              </motion.p>
            )}

            <div 
              className={`flex flex-col ${bp !== "none" ? "sm:grid sm:grid-cols-2" : ""}`}
              style={{ gap: actionsGap }}
            >
              <button 
                type="submit" 
                disabled={loading}
                className="inline-flex h-12 items-center justify-center text-center rounded-full bg-yellow-400 text-xs font-black uppercase text-black transition-all hover:bg-yellow-300 hover:shadow-lg hover:shadow-yellow-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ 
                  paddingLeft: bp === "none" ? "20px" : "24px", 
                  paddingRight: bp === "none" ? "20px" : "24px",
                  letterSpacing: bp === "none" ? "0.16em" : "0.18em"
                }}
              >
                {loading ? "Enviando..." : "Falar sobre meu projeto"}
              </button>
              <CTAButton href="#contato" primary={false}>Diagnóstico estratégico</CTAButton>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
