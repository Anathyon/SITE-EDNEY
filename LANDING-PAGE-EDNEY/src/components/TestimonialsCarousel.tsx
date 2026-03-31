import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { depoimentos, type TestimonialItem } from "../data/content";

function TestimonialCard({ texto, nome, cargo }: TestimonialItem) {
  return (
    <div className="h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] sm:rounded-[2rem]">
      <div className="h-24 border-b border-white/10 bg-[linear-gradient(135deg,rgba(250,204,21,0.22),rgba(255,255,255,0.02))] sm:h-36" />
      <div className="p-4 sm:p-6">
        <p className="text-sm leading-7 text-zinc-300 sm:text-base">&ldquo;{texto}&rdquo;</p>
        <div className="mt-4 h-px bg-white/10" />
        <div className="mt-3 text-xs uppercase tracking-[0.16em] text-zinc-500">{nome}</div>
        <div className="mt-1 text-[11px] uppercase tracking-[0.12em] text-zinc-600">{cargo}</div>
      </div>
    </div>
  );
}

export function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0);

  return (
    <div className="w-full">
      <div className="overflow-hidden">
        <motion.div
          className="flex"
          animate={{ x: `-${current * 100}%` }}
          transition={{ type: "spring", stiffness: 280, damping: 30 }}
        >
          {depoimentos.map((dep, i) => (
            <div key={i} className="w-full shrink-0 px-0 sm:px-1">
              <TestimonialCard {...dep} />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Dots */}
      <div className="mt-5 flex items-center justify-center gap-2">
        {depoimentos.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setCurrent(i)}
            className={`h-2 rounded-full transition-all ${i === current ? "w-8 bg-yellow-400" : "w-2 bg-white/20"}`}
          />
        ))}
      </div>

      {/* Desktop Arrows */}
      <div className="mt-4 hidden items-center justify-between sm:flex">
        <button
          type="button"
          onClick={() => setCurrent((c) => Math.max(0, c - 1))}
          disabled={current === 0}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white transition hover:bg-white/10 disabled:opacity-30"
        >
          <ArrowLeft className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={() => setCurrent((c) => Math.min(depoimentos.length - 1, c + 1))}
          disabled={current === depoimentos.length - 1}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white transition hover:bg-white/10 disabled:opacity-30"
        >
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
