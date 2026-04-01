import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useBreakpoint } from "../hooks/useBreakpoint";

interface FAQItem {
  question: string;
  answer: string;
}

export function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const bp = useBreakpoint();

  const containerGap = bp === "none" ? "12px" : "16px";
  const itemPadding = bp === "none" ? "16px 20px" : "20px 24px";
  const answerPaddingTop = "12px";

  return (
    <div className="flex flex-col" style={{ gap: containerGap }}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
              isOpen ? "border-yellow-400/30 bg-yellow-400/5" : "border-white/10 bg-white/4 hover:bg-white/6"
            }`}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="flex w-full items-center justify-between text-left"
              style={{ padding: itemPadding }}
            >
              <span className={`text-sm font-bold uppercase tracking-tight text-white transition-colors duration-300 sm:text-base ${isOpen ? "text-yellow-300" : ""}`}>
                {item.question}
              </span>
              <div className={`flex h-8 w-8 items-center justify-center rounded-full border transition-all duration-300 ${isOpen ? "border-yellow-400/40 bg-yellow-400/10 text-yellow-300" : "border-white/10 bg-white/4 text-zinc-500"}`}>
                {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
              </div>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div 
                    className="text-sm leading-7 text-zinc-400 sm:text-base"
                    style={{ padding: itemPadding, paddingTop: 0, marginTop: `-${answerPaddingTop}` }}
                  >
                    <div style={{ paddingTop: answerPaddingTop }}>
                      {item.answer}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
