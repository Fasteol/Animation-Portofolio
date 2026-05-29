import type { Variants } from "framer-motion";
export const cardReveal: Variants = {
  hidden: { opacity: 0, y: 80, rotate: -2, scale: 0.9 },
  show: {
    opacity: 1,
    y: 0,
    rotate: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 120, damping: 14 },
  },
};
