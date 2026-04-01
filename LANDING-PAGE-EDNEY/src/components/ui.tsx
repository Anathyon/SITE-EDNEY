import { type ReactNode } from "react";
import { motion } from "framer-motion";
import { fadeUp } from "../animations";
import { useBreakpoint } from "../hooks/useBreakpoint";

/* ──── Eyebrow ──── */
export function Eyebrow({ children }: { children: ReactNode }) {
  const bp = useBreakpoint();
  return (
    <div 
      className="inline-flex items-center rounded-full border border-yellow-400/30 bg-yellow-400/10 font-semibold uppercase text-yellow-300"
      style={{ 
        marginBottom: "16px",
        gap: "8px",
        padding: "6px 12px",
        fontSize: bp === "none" ? "10px" : "12px",
        letterSpacing: bp === "none" ? "0.2em" : "0.24em"
      }}
    >
      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-yellow-300" />
      {children}
    </div>
  );
}

/* ──── Section Title ──── */
export function SectionTitle({ eyebrow, title, desc }: { eyebrow: string; title: string; desc?: string }) {
  return (
    <motion.div {...fadeUp} className="max-w-3xl">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="text-2xl font-black uppercase tracking-tight text-white sm:text-3xl md:text-4xl lg:text-5xl">{title}</h2>
      {desc && <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-300 md:text-base">{desc}</p>}
    </motion.div>
  );
}

/* ──── Photo Card ──── */
export function PhotoCard({ src, alt, className = "", label, children }: { src: string; alt: string; className?: string; label?: string; children?: ReactNode }) {
  const bp = useBreakpoint();
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className={`photo-card-hover group relative overflow-hidden rounded-2xl border border-yellow-400/20 bg-zinc-950 shadow-2xl shadow-black/40 sm:rounded-4xl ${className}`}
    >
      <img src={src} alt={alt} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.15),rgba(0,0,0,0.72)),radial-gradient(circle_at_70%_20%,rgba(250,204,21,0.18),transparent_24%)]" />
      {label && (
        <div 
          className="absolute z-10 rounded-full border border-yellow-400/30 bg-black/45 font-semibold uppercase text-yellow-300 backdrop-blur"
          style={{ 
            left: bp === "none" ? "16px" : "20px", 
            top: bp === "none" ? "16px" : "20px",
            padding: "4px 10px",
            fontSize: bp === "none" ? "10px" : "11px",
            letterSpacing: bp === "none" ? "0.18em" : "0.22em"
          }}
        >
          {label}
        </div>
      )}
      {children && <div className="relative z-10 h-full">{children}</div>}
    </motion.div>
  );
}

/* ──── Metric Pill ──── */
export function MetricPill({ children }: { children: ReactNode }) {
  const bp = useBreakpoint();
  return (
    <div 
      className="rounded-full border border-white/10 bg-white/5 font-semibold uppercase text-zinc-200"
      style={{ 
        padding: bp === "none" ? "6px 12px" : "8px 16px",
        fontSize: bp === "none" ? "10px" : "12px",
        letterSpacing: bp === "none" ? "0.14em" : "0.18em"
      }}
    >
      {children}
    </div>
  );
}

/* ──── Nav Link ──── */
export function NavLink({ href, children, onClick }: { href: string; children: ReactNode; onClick?: () => void }) {
  const bp = useBreakpoint();
  return (
    <a 
      href={href} 
      onClick={onClick} 
      className="text-xs font-semibold uppercase text-zinc-300 transition hover:text-yellow-300"
      style={{ letterSpacing: bp === "none" ? "0.16em" : "0.18em" }}
    >
      {children}
    </a>
  );
}

/* ──── CTA Button ──── */
export function CTAButton({ href, primary, children, className = "", onClick }: { href: string; primary: boolean; children: ReactNode; className?: string; onClick?: () => void }) {
  const bp = useBreakpoint();
  const base = "inline-flex items-center justify-center rounded-full uppercase transition-all hover:-translate-y-0.5";
  const primaryStyle = "bg-yellow-400 font-black text-black hover:bg-yellow-300 hover:shadow-lg hover:shadow-yellow-500/20";
  const secondaryStyle = "border border-white/15 bg-white/5 font-semibold text-white hover:bg-white/10";

  return (
    <a 
      href={href} 
      onClick={onClick} 
      className={`${base} ${primary ? primaryStyle : secondaryStyle} ${className}`}
      style={{ 
        height: bp === "none" ? "44px" : "48px",
        width: bp === "none" ? "100%" : "auto",
        padding: "0 24px",
        fontSize: "12px",
        letterSpacing: bp === "none" ? "0.16em" : "0.18em"
      }}
    >
      {children}
    </a>
  );
}

/* ──── Section Divider ──── */
export function SectionDivider() {
  return <div className="mx-auto h-px max-w-7xl bg-linear-to-r from-transparent via-white/10 to-transparent" />;
}

