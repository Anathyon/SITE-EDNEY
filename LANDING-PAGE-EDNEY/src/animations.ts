import { type HTMLMotionProps } from "framer-motion";

export const fadeUp: HTMLMotionProps<"div"> = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.1 },
  transition: { duration: 0.5 },
};

export const staggerContainer: HTMLMotionProps<"div"> = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.07 } },
  viewport: { once: true, amount: 0.1 },
};
