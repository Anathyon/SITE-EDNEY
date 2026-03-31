import { type ReactNode } from "react";
import { motion } from "framer-motion";
import { fadeUp } from "../animations";

/* ──── Eyebrow ──── */
export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-yellow-300 sm:text-xs sm:tracking-[0.24em]">
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
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className={`photo-card-hover group relative overflow-hidden rounded-2xl border border-yellow-400/20 bg-zinc-950 shadow-2xl shadow-black/40 sm:rounded-[2rem] ${className}`}
    >
      <img src={src} alt={alt} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.15),rgba(0,0,0,0.72)),radial-gradient(circle_at_70%_20%,rgba(250,204,21,0.18),transparent_24%)]" />
      {label && (
        <div className="absolute left-4 top-4 z-10 rounded-full border border-yellow-400/30 bg-black/45 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-yellow-300 backdrop-blur sm:left-5 sm:top-5 sm:px-3 sm:py-1 sm:text-[11px] sm:tracking-[0.22em]">
          {label}
        </div>
      )}
      {children && <div className="relative z-10 h-full">{children}</div>}
    </motion.div>
  );
}

/* ──── Metric Pill ──── */
export function MetricPill({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-zinc-200 sm:px-4 sm:py-2 sm:text-xs sm:tracking-[0.18em]">
      {children}
    </div>
  );
}

/* ──── Nav Link ──── */
export function NavLink({ href, children, onClick }: { href: string; children: ReactNode; onClick?: () => void }) {
  return (
    <a href={href} onClick={onClick} className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-300 transition hover:text-yellow-300 sm:tracking-[0.18em]">
      {children}
    </a>
  );
}

/* ──── CTA Button ──── */
export function CTAButton({ href, primary, children, className = "", onClick }: { href: string; primary: boolean; children: ReactNode; className?: string; onClick?: () => void }) {
  const base = "inline-flex h-11 w-full items-center justify-center rounded-full px-5 text-xs uppercase tracking-[0.16em] transition-all hover:-translate-y-0.5 sm:h-12 sm:w-auto sm:px-6 sm:tracking-[0.18em]";
  const primaryStyle = "bg-yellow-400 font-black text-black hover:bg-yellow-300 hover:shadow-lg hover:shadow-yellow-500/20";
  const secondaryStyle = "border border-white/15 bg-white/5 font-semibold text-white hover:bg-white/10";

  return (
    <a href={href} onClick={onClick} className={`${base} ${primary ? primaryStyle : secondaryStyle} ${className}`}>
      {children}
    </a>
  );
}

/* ──── Section Divider ──── */
export function SectionDivider() {
  return <div className="mx-auto h-px max-w-7xl bg-gradient-to-r from-transparent via-white/10 to-transparent" />;
}
