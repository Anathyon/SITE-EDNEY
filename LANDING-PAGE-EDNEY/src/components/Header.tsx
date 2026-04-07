import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks } from "../data/content";
import { useBreakpoint } from "../hooks/useBreakpoint";
import { useUIStore } from "../store/useUIStore";

export function Header() {
  const { isMenuOpen, toggleMenu, closeMenu } = useUIStore();
  const bp = useBreakpoint();

  // Body Scroll Lock
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  // Responsive Styles
  const navPadding = bp === "none" ? "12px 16px" : 
                    bp === "sm"   ? "16px 24px" :
                    bp === "md"   ? "16px 40px" :
                                    "16px 56px";

  const logoGap = bp === "none" ? "10px" : "12px";
  const navGap = "20px";

  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 z-60 border-b border-white/10 bg-black/70 backdrop-blur-xl"
    >
      <div 
        className="flex max-w-[90%] items-center justify-between"
        style={{ padding: navPadding, paddingLeft: "13%", marginLeft: "auto", marginRight: "auto" }}
      >
        {/* Logo */}
        <a href="#topo" className="flex items-center" style={{ gap: logoGap }}>
          <div 
            className="flex items-center justify-center rounded-xl border border-yellow-400/30 bg-yellow-400/10 text-xs font-black uppercase tracking-[0.16em] text-yellow-300"
            style={{ 
              width: bp === "none" ? "36px" : "44px",
              height: bp === "none" ? "36px" : "44px",
              fontSize: bp === "none" ? "12px" : "14px"
            }}
          >
            EE
          </div>
          <div>
            <div className="text-xs font-black uppercase tracking-[0.14em] text-white" style={{ fontSize: bp === "none" ? "12px" : "14px" }}>Edney Eslley</div>
            <div className={`hidden text-[10px] font-medium uppercase tracking-[0.16em] text-zinc-400 ${bp !== "none" ? "sm:block" : ""}`} style={{ fontSize: bp === "none" ? "10px" : "11px" }}>Marketing e Política</div>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden items-center lg:flex" style={{ gap: navGap }}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[11px] font-black uppercase tracking-[0.14em] text-zinc-400 transition hover:text-yellow-300"
              style={{ fontSize: bp === "lg" || bp === "xl" ? "12px" : "11px" }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a 
          href="#contato" 
          className="hidden items-center justify-center text-center rounded-full bg-yellow-400 text-[11px] font-black uppercase tracking-[0.14em] text-black transition hover:bg-yellow-300 lg:inline-flex"
          style={{ height: "44px", padding: "0 20px" }}
        >
          Falar sobre meu projeto
        </a>

        {/* Mobile Toggle */}
        <button 
          type="button" 
          onClick={toggleMenu} 
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/4 lg:hidden" 
          aria-label="Menu"
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
              className="fixed inset-0 z-90 bg-black/95 backdrop-blur-xl lg:hidden"
            />
            {/* Sidebar */}
            <motion.div
              key="mobile-sidebar"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 z-100 h-full border-l border-white/10 shadow-[0_0_50px_rgba(0,0,0,1)] lg:hidden"
              style={{ 
                width: bp === "none" ? "100%" : "360px", 
                backgroundColor: "#09090b",
                backgroundImage: "linear-gradient(to bottom, #09090b, #000000)"
              }}
            >
              <div className="flex flex-col h-full">
                {/* Sidebar Header */}
                <div className="flex items-center justify-between border-b border-white/5" style={{ padding: "32px" }}>
                  <div className="text-sm font-black uppercase tracking-[0.2em] text-white">Menu</div>
                  <button 
                    onClick={closeMenu} 
                    className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-zinc-400 hover:text-white transition"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
                
                  <div className="flex flex-col h-full" style={{ padding: "32px", paddingTop: "40px", backgroundColor: "inherit" }}>
                    <nav className="flex flex-col" style={{ gap: "24px" }}>
                      {navLinks.map((link, i) => (
                        <motion.a
                          key={link.href}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 + i * 0.05 }}
                          href={link.href}
                          onClick={closeMenu}
                          className="group flex items-center justify-between text-sm font-black uppercase tracking-[0.2em] text-zinc-400 transition-all hover:text-yellow-300 hover:scale-105 origin-left"
                          style={{ paddingTop: "8px", paddingBottom: "8px" }}
                        >
                          <span>{link.label}</span>
                          <div className="h-px w-0 bg-yellow-400/50 transition-all duration-300 group-hover:w-8" />
                        </motion.a>
                      ))}
                    </nav>
  
                    <div style={{ marginTop: "auto", paddingBottom: "16px" }}>
                      <a
                        href="#contato"
                        onClick={closeMenu}
                        className="flex h-14 items-center justify-center text-center rounded-full bg-yellow-400 text-xs font-black uppercase tracking-[0.2em] text-black transition-all hover:bg-yellow-300 hover:shadow-xl hover:shadow-yellow-500/20 active:scale-95"
                        style={{ paddingLeft: "32px", paddingRight: "32px" }}
                      >
                        Falar sobre meu projeto
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.header>
    );
  }

