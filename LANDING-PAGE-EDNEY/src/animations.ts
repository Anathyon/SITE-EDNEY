import { type HTMLMotionProps, type Variants } from "framer-motion";

const defaultTransition = { duration: 0.6, ease: [0.22, 1, 0.36, 1] as any };

export const fadeUpVariants: Variants = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0, transition: defaultTransition },
};

export const scaleInVariants: Variants = {
  initial: { opacity: 0, scale: 0.94 },
  whileInView: { opacity: 1, scale: 1, transition: defaultTransition },
};

export const slideInLeftVariants: Variants = {
  initial: { opacity: 0, x: -32 },
  whileInView: { opacity: 1, x: 0, transition: defaultTransition },
};

export const slideInRightVariants: Variants = {
  initial: { opacity: 0, x: 32 },
  whileInView: { opacity: 1, x: 0, transition: defaultTransition },
};

export const fadeInVariants: Variants = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

export const fadeUp: HTMLMotionProps<"div"> = {
  ...fadeUpVariants,
  viewport: { once: true, amount: 0.1 },
};

export const scaleIn: HTMLMotionProps<"div"> = {
  ...scaleInVariants,
  viewport: { once: true },
};

export const staggerContainer: Variants = {
  initial: {},
  whileInView: { 
    transition: { 
      staggerChildren: 0.08,
      delayChildren: 0.1
    } 
  },
};

export const hoverScale: any = {
  whileHover: { y: -6, scale: 1.02 },
  whileTap: { scale: 0.98 },
  transition: { type: "spring", stiffness: 400, damping: 17 }
};
