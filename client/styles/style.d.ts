import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      background: string;
      brightBackground: string;
      color: string;
      brightColor: string;
      error: string;
    };

    fontSizes: {
      small: string;
      medium: string;
      large: string;
    };

    fontWeights: {
      light: number;
      regular: number;
      bold: number;
    };

    breakpoints: {
      mobile: string;
      tablet: string;
      desktop: string;
    };

    sizes: {
      gap: string;
      borderHeight: string;
      borderRadius: string;
    };
  }
}
