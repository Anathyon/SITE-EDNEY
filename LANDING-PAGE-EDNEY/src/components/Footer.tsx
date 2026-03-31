import {
  Instagram,
  Facebook,
  Linkedin,
  Youtube,
  MessageCircle,
  Shield,
  FileText,
  Mail,
  type LucideIcon,
} from "lucide-react";

const socialLinks: { icon: LucideIcon; label: string }[] = [
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
  return (
    <footer className="border-t border-white/10 bg-black/70">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 md:px-10 lg:px-14">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 sm:gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-yellow-400/30 bg-yellow-400/10 text-xs font-black uppercase tracking-[0.16em] text-yellow-300 sm:h-11 sm:w-11 sm:rounded-2xl sm:text-sm sm:tracking-[0.18em]">
                EE
              </div>
              <div>
                <div className="text-xs font-black uppercase tracking-[0.16em] text-white sm:text-sm sm:tracking-[0.18em]">Edney Eslley</div>
                <div className="text-[10px] font-medium uppercase tracking-[0.16em] text-zinc-400 sm:text-[11px] sm:tracking-[0.18em]">Marketing e Política</div>
              </div>
            </div>
            <p className="mt-3 max-w-xs text-sm leading-7 text-zinc-400 sm:mt-4">
              Estratégia e direção de comunicação para campanhas que precisam vencer.
            </p>
            <div className="mt-4 flex gap-2.5 sm:mt-6 sm:gap-3">
              {socialLinks.map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-zinc-400 transition hover:border-yellow-400/30 hover:bg-yellow-400/10 hover:text-yellow-300 sm:h-10 sm:w-10 sm:rounded-xl"
                  aria-label={label}
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-yellow-300 sm:text-xs sm:tracking-[0.22em]">Navegação</div>
            <div className="mt-3 grid grid-cols-2 gap-2 sm:mt-4 sm:flex sm:flex-col sm:gap-3">
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
          <div>
            <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-yellow-300 sm:text-xs sm:tracking-[0.22em]">Informações</div>
            <div className="mt-3 flex flex-col gap-2.5 sm:mt-4 sm:gap-3">
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
            <div className="mt-4 rounded-xl border border-white/10 bg-white/[0.04] p-3.5 sm:mt-6 sm:rounded-2xl sm:p-4">
              <div className="text-[10px] font-semibold uppercase tracking-[0.14em] text-zinc-400 sm:text-xs sm:tracking-[0.16em]">Localização</div>
              <p className="mt-1.5 text-sm text-zinc-300 sm:mt-2">Região Norte do Ceará</p>
              <p className="text-xs text-zinc-500">Atendimento nacional</p>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 sm:mt-10 sm:flex-row">
          <p className="text-[11px] text-zinc-500 sm:text-xs">&copy; {new Date().getFullYear()} Edney Eslley — Marketing e Política. Todos os direitos reservados.</p>
          <p className="text-[10px] text-zinc-600 sm:text-xs">Landing de conversão para marketing político</p>
        </div>
      </div>
    </footer>
  );
}
