import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useBreakpoint } from "../hooks/useBreakpoint";

interface Testimonial {
  content: string;
  author: string;
  role: string;
}

export function TestimonialsCarousel({ items }: { items: Testimonial[] }) {
  const [index, setIndex] = useState(0);
  const bp = useBreakpoint();

  const next = () => setIndex((i) => (i + 1) % items.length);
  const prev = () => setIndex((i) => (i - 1 + items.length) % items.length);

  useEffect(() => {
    const timer = setInterval(next, 8000);
    return () => clearInterval(timer);
  }, []);

  const cardPadding = bp === "none" ? "24px" :
                      bp === "sm"   ? "32px" :
                                      "40px";
  
  const contentGap = bp === "none" ? "20px" : "24px";
  const controlsGap = "12px";

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-4xl border border-white/10 bg-white/4 sm:rounded-[3rem]">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            style={{ padding: cardPadding }}
          >
            <div className="flex flex-col items-center text-center" style={{ gap: contentGap }}>
              <div className="flex flex-col items-center" style={{ gap: "16px" }}>
                <div 
                  className="flex items-center justify-center rounded-2xl bg-yellow-400/10 text-yellow-300"
                  style={{ width: bp === "none" ? "48px" : "56px", height: bp === "none" ? "48px" : "56px" }}
                >
                  <Quote className="h-6 w-6 sm:h-7 sm:w-7" />
                </div>
                <div className="flex" style={{ gap: "4px" }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400 sm:h-4 sm:w-4" />
                  ))}
                </div>
              </div>

              <blockquote className="max-w-2xl text-lg font-medium leading-relaxed text-white sm:text-xl md:text-2xl">
                "{items[index].content}"
              </blockquote>

              <div className="flex flex-col items-center" style={{ marginTop: "16px" }}>
                <div>
                  <div className="text-sm font-black uppercase tracking-widest text-white sm:text-base">{items[index].author}</div>
                  <div className="text-[10px] font-semibold uppercase tracking-widest text-yellow-300 sm:text-xs">{items[index].role}</div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div 
        className="flex items-center justify-center"
        style={{ gap: controlsGap, marginTop: bp === "none" ? "24px" : "32px" }}
      >
        <button
          onClick={prev}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/4 text-zinc-400 transition hover:border-yellow-400/40 hover:bg-yellow-400/10 hover:text-yellow-300 sm:h-12 sm:w-12"
          aria-label="Anterior"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <div className="flex" style={{ gap: "8px" }}>
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${i === index ? "w-8 bg-yellow-400" : "w-1.5 bg-white/15 hover:bg-white/30"}`}
              aria-label={`Ir para depoimento ${i + 1}`}
            />
          ))}
        </div>
        <button
          onClick={next}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/4 text-zinc-400 transition hover:border-yellow-400/40 hover:bg-yellow-400/10 hover:text-yellow-300 sm:h-12 sm:w-12"
          aria-label="Próximo"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
