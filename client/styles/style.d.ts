import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      background: string;
      color: string;
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

    sizes: {
      gap: string;
      borderHeight: string;
    };
  }
}
