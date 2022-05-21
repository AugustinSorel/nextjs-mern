import { DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
  colors: {
    background: "#121212",
    color: "#b3b3b3",
  },

  fontSizes: {
    small: "1vmax",
    medium: "2vmax",
    large: "3vmax",
  },

  fontWeights: {
    light: 300,
    regular: 400,
    bold: 700,
  },

  breakpoints: {
    mobile: "768px",
    tablet: "1024px",
    desktop: "1440px",
  },

  sizes: {
    gap: "1rem",
    borderHeight: "3px",
  },
};

export default theme;
