import {
  MessageCircle,
  Shield,
  FileText,
  Mail,
} from "lucide-react";
import { useBreakpoint } from "../hooks/useBreakpoint";

const Instagram = (props: any) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);
const Facebook = (props: any) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);
const Linkedin = (props: any) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);
const Youtube = (props: any) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.11 1 12 1 12s0 3.89.46 5.58a2.78 2.78 0 0 0 1.94 2c1.72.42 8.6.42 8.6.42s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.89 23 12 23 12s0-3.89-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></svg>
);

const socialLinks: { icon: any; label: string }[] = [
  { icon: Instagram, label: "Instagram" },
  { icon: Facebook, label: "Facebook" },
  { icon: Linkedin, label: "LinkedIn" },
  { icon: Youtube, label: "YouTube" },
  { icon: MessageCircle, label: "WhatsApp" },
];

const footerNav = [
  { label: "Sobre", href: "#sobre" },
  { label: "Atuação", href: "#servicos" },
  { label: "Cases", href: "#cases" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
];

export function Footer() {
  const bp = useBreakpoint();

  // Responsive Styles
  const footerPadding = bp === "none" ? "40px 16px" :
                        bp === "sm"   ? "48px 24px" :
                        bp === "md"   ? "48px 40px" :
                                        "48px 56px";
  
  const gridGap = bp === "none" ? "32px" : "40px";
  const brandMarginTop = bp === "none" ? "12px" : "16px";
  const socialGap = bp === "none" ? "10px" : "12px";
  const navGap = bp === "none" ? "8px" : "12px";
  const legalGap = bp === "none" ? "10px" : "12px";
  const localizationMarginTop = bp === "none" ? "16px" : "24px";
  const bottomMarginTop = bp === "none" ? "32px" : "40px";
  const bottomGap = "12px";

  return (
    <footer className="border-t border-white/10 bg-black/70">
      <div 
        className="mx-auto max-w-7xl"
        style={{ padding: footerPadding }}
      >
        <div 
          className="grid sm:grid-cols-2 lg:grid-cols-3"
          style={{ gap: gridGap }}
        >
          {/* Brand */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="flex items-center" style={{ gap: bp === "none" ? "10px" : "12px" }}>
              <div 
                className="flex items-center justify-center rounded-xl border border-yellow-400/30 bg-yellow-400/10 text-xs font-black uppercase tracking-[0.16em] text-yellow-300"
                style={{ 
                  width: bp === "none" ? "40px" : "44px",
                  height: bp === "none" ? "40px" : "44px"
                }}
              >
                EE
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <div className="text-xs font-black uppercase tracking-[0.16em] text-white sm:text-sm sm:tracking-[0.18em]">Edney Eslley</div>
                <div className="text-[10px] font-medium uppercase tracking-[0.16em] text-zinc-400 sm:text-[11px] sm:tracking-[0.18em]">Marketing e Política</div>
              </div>
            </div>
            <p 
              className="max-w-xs text-sm leading-7 text-zinc-400"
              style={{ marginTop: brandMarginTop }}
            >
              Estratégia e direção de comunicação para campanhas que precisam vencer.
            </p>
            <div 
              className="flex" 
              style={{ gap: socialGap, marginTop: bp === "none" ? "16px" : "24px" }}
            >
              {socialLinks.map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  className="flex items-center justify-center rounded-lg border border-white/10 bg-white/4 text-zinc-400 transition hover:border-yellow-400/30 hover:bg-yellow-400/10 hover:text-yellow-300 sm:rounded-xl"
                  style={{ width: bp === "none" ? "36px" : "40px", height: bp === "none" ? "36px" : "40px" }}
                  aria-label={label}
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-yellow-300 sm:text-xs sm:tracking-[0.22em]">Navegação</div>
            <div 
              className={`mt-3 grid grid-cols-2 ${bp !== "none" ? "sm:flex sm:flex-col" : ""}`}
              style={{ gap: navGap }}
            >
              {footerNav.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-zinc-400 transition-colors hover:text-yellow-300"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-yellow-300 sm:text-xs sm:tracking-[0.22em]">Informações</div>
            <div 
              className="mt-3 flex flex-col"
              style={{ gap: legalGap }}
            >
              <a href="#" className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-zinc-400 transition hover:text-yellow-300 sm:text-xs sm:tracking-[0.18em]">
                <Shield className="h-3 w-3 sm:h-3.5 sm:w-3.5" /> Política de privacidade
              </a>
              <a href="#" className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-zinc-400 transition hover:text-yellow-300 sm:text-xs sm:tracking-[0.18em]">
                <FileText className="h-3 w-3 sm:h-3.5 sm:w-3.5" /> Termos de uso
              </a>
              <a href="#" className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-zinc-400 transition hover:text-yellow-300 sm:text-xs sm:tracking-[0.18em]">
                <Mail className="h-3 w-3 sm:h-3.5 sm:w-3.5" /> Contato por e-mail
              </a>
            </div>
            <div 
              className="rounded-xl border border-white/10 bg-white/4 sm:rounded-2xl"
              style={{ padding: bp === "none" ? "14px" : "16px", marginTop: localizationMarginTop }}
            >
              <div className="text-[10px] font-semibold uppercase tracking-[0.14em] text-zinc-400 sm:text-xs sm:tracking-[0.16em]">Localização</div>
              <p className="mt-1.5 text-sm text-zinc-300 sm:mt-2">Região Norte do Ceará</p>
              <p className="text-xs text-zinc-500">Atendimento nacional</p>
            </div>
          </div>
        </div>

        <div 
          className="flex flex-col items-center justify-between border-t border-white/10 text-center sm:flex-row sm:text-left"
          style={{ marginTop: bottomMarginTop, paddingTop: "24px", gap: bottomGap }}
        >
          <p className="text-[11px] text-zinc-500 sm:text-xs">&copy; {new Date().getFullYear()} Edney Eslley — Marketing e Política. Todos os direitos reservados.</p>
          <p className="text-[10px] text-zinc-600 sm:text-xs">Landing de conversão para marketing político</p>
        </div>
      </div>
    </footer>
  );
}

