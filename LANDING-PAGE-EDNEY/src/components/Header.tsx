import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks } from "../data/content";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const close = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-[60] border-b border-white/10 bg-black/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4 md:px-10 lg:px-14">
        {/* Logo */}
        <a href="#topo" className="flex items-center gap-2.5 sm:gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-yellow-400/30 bg-yellow-400/10 text-xs font-black uppercase tracking-[0.16em] text-yellow-300 sm:h-11 sm:w-11 sm:rounded-2xl sm:text-sm sm:tracking-[0.18em]">
            EE
          </div>
          <div>
            <div className="text-xs font-black uppercase tracking-[0.14em] text-white sm:text-sm sm:tracking-[0.18em]">Edney Eslley</div>
            <div className="hidden text-[10px] font-medium uppercase tracking-[0.16em] text-zinc-400 sm:block sm:text-[11px] sm:tracking-[0.18em]">Marketing e Política</div>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-5 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[11px] font-black uppercase tracking-[0.14em] text-zinc-400 transition hover:text-yellow-300 sm:text-xs sm:tracking-[0.18em]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a href="#contato" className="hidden h-10 items-center rounded-full bg-yellow-400 px-4 text-[11px] font-black uppercase tracking-[0.14em] text-black transition hover:bg-yellow-300 lg:inline-flex sm:h-11 sm:px-5 sm:text-xs sm:tracking-[0.18em]">
          Falar sobre meu projeto
        </a>

        {/* Mobile Toggle */}
        <button type="button" onClick={() => setMenuOpen((v) => !v)} className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] lg:hidden" aria-label="Menu">
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-white/10 bg-black/95 lg:hidden"
          >
            <div className="flex flex-col gap-1 px-4 py-3 sm:gap-3 sm:px-6 sm:py-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={close}
                  className="block rounded-lg px-4 py-3 text-[11px] font-black uppercase tracking-[0.14em] text-zinc-400 hover:bg-white/[0.04] hover:text-yellow-300 sm:px-5 sm:py-3.5 sm:text-xs sm:tracking-[0.18em]"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2 sm:pt-3">
                <a
                  href="#contato"
                  onClick={close}
                  className="flex h-11 items-center justify-center rounded-full bg-yellow-400 px-5 text-[11px] font-black uppercase tracking-[0.14em] text-black transition hover:bg-yellow-300 sm:h-12 sm:px-6 sm:text-xs sm:tracking-[0.18em]"
                >
                  Falar sobre meu projeto
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
