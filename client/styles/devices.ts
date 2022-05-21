import theme from "./theme";

const devices = {
  mobile: `(max-width: ${theme.breakpoints.mobile})`,
  tablet: `(max-width: ${theme.breakpoints.tablet})`,
  desktop: `(max-width: ${theme.breakpoints.desktop})`,
};

export default devices;
