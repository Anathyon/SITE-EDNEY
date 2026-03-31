import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { faqData } from "../data/content";
import { fadeUp } from "../animations";

export function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggle = useCallback((i: number) => setOpenIndex((prev) => (prev === i ? null : i)), []);

  return (
    <motion.div {...fadeUp} className="space-y-2.5">
      {faqData.map((item, i) => (
        <div
          key={i}
          className={`overflow-hidden rounded-xl border transition-all duration-300 sm:rounded-2xl ${
            openIndex === i ? "border-yellow-400/30 bg-yellow-400/[0.04]" : "border-white/10 bg-white/[0.03]"
          }`}
        >
          <button type="button" onClick={() => toggle(i)} className="flex w-full items-start gap-3 p-4 text-left sm:gap-4 sm:p-5">
            <span className="flex-1 text-sm font-semibold leading-relaxed text-white sm:text-base">{item.pergunta}</span>
            <ChevronDown className={`mt-0.5 h-5 w-5 shrink-0 text-yellow-300 transition-transform duration-300 ${openIndex === i ? "rotate-180" : ""}`} />
          </button>
          <AnimatePresence initial={false}>
            {openIndex === i && (
              <motion.div
                key="answer"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <p className="px-4 pb-4 text-sm leading-7 text-zinc-300 sm:px-5 sm:pb-5">{item.resposta}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </motion.div>
  );
}
