import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks } from "../data/content";
import { useBreakpoint } from "../hooks/useBreakpoint";
import { useUIStore } from "../store/useUIStore";

export function Header() {
  const { isMenuOpen, toggleMenu, closeMenu } = useUIStore();
  const bp = useBreakpoint();

  // Responsive Styles
  const navPadding = bp === "none" ? "12px 16px" : 
                    bp === "sm"   ? "16px 24px" :
                    bp === "md"   ? "16px 40px" :
                                    "16px 56px";

  const logoGap = bp === "none" ? "10px" : "12px";
  const navGap = "20px";

  return (
    <header className="sticky top-0 z-60 border-b border-white/10 bg-black/70 backdrop-blur-xl">
      <div 
        className="mx-auto flex max-w-7xl items-center justify-between"
        style={{ padding: navPadding }}
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
          className="hidden items-center rounded-full bg-yellow-400 text-[11px] font-black uppercase tracking-[0.14em] text-black transition hover:bg-yellow-300 lg:inline-flex"
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
              className="fixed inset-0 z-70 bg-black/60 backdrop-blur-sm lg:hidden"
            />
            {/* Sidebar */}
            <motion.div
              key="mobile-sidebar"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 z-80 h-full w-[280px] border-l border-white/10 bg-zinc-950 shadow-2xl sm:w-[320px] lg:hidden"
            >
              <div className="flex flex-col h-full p-6">
                <div className="flex items-center justify-between mb-8">
                  <div className="text-sm font-black uppercase tracking-widest text-yellow-300">Navegação</div>
                  <button onClick={closeMenu} className="p-2 text-zinc-400 hover:text-white transition">
                    <X className="h-6 w-6" />
                  </button>
                </div>
                
                <nav className="flex flex-col" style={{ gap: "8px" }}>
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={closeMenu}
                      className="block rounded-lg px-4 py-4 text-xs font-black uppercase tracking-[0.18em] text-zinc-400 hover:bg-white/4 hover:text-yellow-300 transition"
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>

                <div className="mt-auto pt-6">
                  <a
                    href="#contato"
                    onClick={closeMenu}
                    className="flex h-12 items-center justify-center rounded-full bg-yellow-400 px-6 text-xs font-black uppercase tracking-[0.18em] text-black transition hover:bg-yellow-300"
                  >
                    Falar sobre meu projeto
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

