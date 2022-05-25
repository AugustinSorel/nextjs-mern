import { Variants } from "framer-motion";

export const listVariants: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const listItemVariants: Variants = {
  initial: {
    opacity: 0,
    x: -20,
  },

  animate: {
    opacity: 1,
    x: 0,
  },
};
