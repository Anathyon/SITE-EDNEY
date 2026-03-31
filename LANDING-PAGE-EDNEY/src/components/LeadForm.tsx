import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BadgeCheck } from "lucide-react";
import { CTAButton } from "./ui";

interface FormState {
  nome: string;
  whatsapp: string;
  email: string;
  projeto: string;
  mensagem: string;
}

const initialState: FormState = { nome: "", whatsapp: "", email: "", projeto: "", mensagem: "" };

const inputClass =
  "h-12 w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 text-sm text-white outline-none transition placeholder:text-zinc-500 focus:border-yellow-400/40 focus:bg-white/[0.06] sm:rounded-2xl";

export function LeadForm() {
  const [formData, setFormData] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field: keyof FormState, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData(initialState);
  };

  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 sm:rounded-[2.25rem] sm:p-6 md:p-8">
      <div className="mb-5 sm:mb-6">
        <div className="text-xs font-semibold uppercase tracking-[0.2em] text-yellow-300 sm:tracking-[0.22em]">Solicite contato</div>
        <h3 className="mt-3 text-xl font-black uppercase text-white sm:text-2xl">Fale sobre o seu projeto</h3>
        <p className="mt-2 text-sm leading-7 text-zinc-300 sm:mt-3">Descreva rapidamente o cenário, objetivo e necessidade.</p>
      </div>

      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="flex min-h-[280px] flex-col items-center justify-center text-center sm:min-h-[340px]"
          >
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-500/20 sm:h-16 sm:w-16">
              <BadgeCheck className="h-7 w-7 text-green-400 sm:h-8 sm:w-8" />
            </div>
            <h4 className="text-lg font-bold text-white sm:text-xl">Mensagem enviada!</h4>
            <p className="mt-2 text-sm text-zinc-300">Entraremos em contato em breve.</p>
          </motion.div>
        ) : (
          <motion.form key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
            <input
              type="text"
              required
              placeholder="Seu nome"
              value={formData.nome}
              onChange={(e) => handleChange("nome", e.target.value)}
              className={inputClass}
            />
            <div className="grid gap-3 sm:gap-4 sm:grid-cols-2">
              <input type="text" placeholder="WhatsApp" value={formData.whatsapp} onChange={(e) => handleChange("whatsapp", e.target.value)} className={inputClass} />
              <input type="email" placeholder="E-mail" value={formData.email} onChange={(e) => handleChange("email", e.target.value)} className={inputClass} />
            </div>
            <input type="text" placeholder="Cidade / projeto / mandato" value={formData.projeto} onChange={(e) => handleChange("projeto", e.target.value)} className={inputClass} />
            <textarea
              placeholder="Descreva seu cenário, necessidade ou objetivo"
              value={formData.mensagem}
              onChange={(e) => handleChange("mensagem", e.target.value)}
              className="min-h-[100px] w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-500 focus:border-yellow-400/40 focus:bg-white/[0.06] sm:min-h-[130px] sm:rounded-2xl"
            />
            <div className="flex flex-col gap-2.5 sm:grid sm:grid-cols-2 sm:gap-3">
              <button type="submit" className="inline-flex h-12 items-center justify-center rounded-full bg-yellow-400 px-5 text-xs font-black uppercase tracking-[0.16em] text-black transition-all hover:bg-yellow-300 hover:shadow-lg hover:shadow-yellow-500/20 sm:px-6 sm:tracking-[0.18em]">
                Falar sobre meu projeto
              </button>
              <CTAButton href="#contato" primary={false}>Diagnóstico estratégico</CTAButton>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
