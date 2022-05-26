import { Variants } from "framer-motion";
import theme from "../styles/theme";

const errorVariants: Variants = {
  animate: {
    color: [theme.colors.color, theme.colors.error, theme.colors.color],
    x: [0, -30, 30, 0],
  },
};

export default errorVariants;
