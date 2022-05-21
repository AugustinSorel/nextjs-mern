import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import GlobalStyle from "../styles/GlobalStyle";
import LayoutHeader from "../components/Layouts/LayoutHeader";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <LayoutHeader>
        <Component {...pageProps} />
      </LayoutHeader>
    </ThemeProvider>
  );
}

export default MyApp;
