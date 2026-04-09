import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks } from "../data/content";
import { useBreakpoint } from "../hooks/useBreakpoint";
import { useUIStore } from "../store/useUIStore";

// --- Sub-components ---

const Logo = ({ bp }: { bp: string }) => (
  <a 
    href="#topo" 
    className="flex items-center transition-opacity hover:opacity-90"
    style={{ gap: bp === "none" ? "10px" : "12px" }}
  >
    <div 
      className="flex items-center justify-center rounded-xl border border-yellow-400/30 bg-yellow-400/10 font-black uppercase tracking-[0.16em] text-yellow-300"
      style={{ 
        width: bp === "none" ? "36px" : "44px",
        height: bp === "none" ? "36px" : "44px",
        fontSize: bp === "none" ? "12px" : "14px"
      }}
    >
      EE
    </div>
    <div className="flex flex-col">
      <span 
        className="text-xs font-black uppercase tracking-[0.14em] text-white" 
        style={{ fontSize: bp === "none" ? "12px" : "14px" }}
      >
        Edney Eslley
      </span>
      <span 
        className={`text-[10px] font-medium uppercase tracking-[0.16em] text-zinc-400 ${bp === "none" ? "hidden" : "block"}`}
        style={{ fontSize: bp === "none" ? "10px" : "11px" }}
      >
        Marketing e Política
      </span>
    </div>
  </a>
);

const DesktopNav = ({ bp }: { bp: string }) => (
  <nav className="hidden items-center lg:flex" style={{ gap: bp === "lg" || bp === "xl" ? "24px" : "20px" }}>
    {navLinks.map((link) => (
      <a
        key={link.href}
        href={link.href}
        className="text-[11px] font-black uppercase tracking-[0.14em] text-zinc-400 transition-colors hover:text-yellow-300"
        style={{ fontSize: bp === "lg" || bp === "xl" ? "12px" : "11px" }}
      >
        {link.label}
      </a>
    ))}
  </nav>
);

const CTAButton = ({ mobile, onClick }: { mobile?: boolean; onClick?: () => void }) => (
  <a 
    href="#contato" 
    onClick={onClick}
    className={`
      flex items-center justify-center text-center rounded-full bg-yellow-400 font-black uppercase tracking-[0.14em] text-black transition-all hover:bg-yellow-300 
      ${mobile 
        ? "h-14 w-full text-xs shadow-lg hover:shadow-yellow-500/20 active:scale-95" 
        : "hidden h-11 text-[11px] lg:inline-flex"
      }
    `}
    style={{
      paddingLeft: mobile ? "32px" : "20px",
      paddingRight: mobile ? "32px" : "20px"
    }}
  >
    Falar sobre meu projeto
  </a>
);

const MobileSidebar = ({ isOpen, onClose, bp }: { isOpen: boolean; onClose: () => void; bp: string }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ x: "100%", opacity: 1 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: "100%", opacity: 1 }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="fixed inset-0 h-full lg:hidden flex flex-col shadow-2xl"
        style={{ 
          width: "100%", 
          backgroundColor: "#000000",
          zIndex: 9999,
          opacity: 1
        }}
      >
        {/* Solid Fallback Layer */}
        <div 
          className="absolute inset-0 bg-black" 
          style={{ zIndex: -10, opacity: 1 }} 
        />

        {/* Sidebar Header */}
        <div 
          className="flex items-center justify-between border-b border-white/5" 
          style={{ padding: bp === "none" ? "24px" : "40px" }}
        >
          <div className="text-sm font-black uppercase tracking-[0.2em] text-white">Menu</div>
          <button 
            onClick={onClose} 
            className="group flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-zinc-400 transition-colors hover:text-white"
            aria-label="Fechar menu"
          >
            <X className="h-5 w-5 transition-transform group-hover:rotate-90" />
          </button>
        </div>
        
        {/* Sidebar Content */}
        <div 
          className="flex flex-col flex-1" 
          style={{ 
            padding: bp === "none" ? "24px" : "40px", 
            paddingTop: bp === "none" ? "32px" : "60px" 
          }}
        >
          <nav className="flex flex-col" style={{ gap: bp === "none" ? "24px" : "32px" }}>
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + i * 0.05 }}
                href={link.href}
                onClick={onClose}
                className="group flex items-center justify-between text-base font-black uppercase tracking-[0.2em] text-zinc-400 transition-all hover:scale-105 hover:text-yellow-300 origin-left"
                style={{ padding: "12px 0" }}
              >
                <span>{link.label}</span>
                <div className="h-px w-0 bg-yellow-400/50 transition-all duration-300 group-hover:w-12" />
              </motion.a>
            ))}
          </nav>

          <div className="mt-auto" style={{ paddingBottom: bp === "none" ? "32px" : "48px" }}>
            <CTAButton mobile onClick={onClose} />
          </div>
        </div>
      </motion.div>
    )}
  </AnimatePresence>
);

// --- Main Header ---

export function Header() {
  const { isMenuOpen, toggleMenu, closeMenu } = useUIStore();
  const bp = useBreakpoint();

  // Scroll Lock for Mobile Menu
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
    return () => { document.body.style.overflow = "auto"; };
  }, [isMenuOpen]);

  const navPadding = bp === "none" ? "12px 16px" : 
                    bp === "sm"   ? "16px 24px" :
                    bp === "md"   ? "16px 40px" :
                                    "16px 56px";

  return (
    <>
      <motion.header 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="sticky top-0 z-60 border-b border-white/10 bg-black/70 backdrop-blur-xl"
      >
        <div 
          className="flex items-center justify-between"
          style={{ 
            padding: navPadding,
            paddingLeft: (bp === "lg" || bp === "xl") ? "13%" : undefined,
            maxWidth: "90%",
            marginLeft: "auto",
            marginRight: "auto"
          }}
        >
          <Logo bp={bp} />

          <div className="flex items-center" style={{ gap: bp === "none" ? "24px" : "32px" }}>
            <DesktopNav bp={bp} />
            <CTAButton />

            {/* Mobile Toggle */}
            <button 
              type="button" 
              onClick={toggleMenu} 
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition-colors hover:bg-white/10 lg:hidden" 
              aria-label="Menu"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      <MobileSidebar isOpen={isMenuOpen} onClose={closeMenu} bp={bp} />
    </>
  );
}
