import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }   

    :root{
        --background-color: ${({ theme }) => theme.colors.background};
        --bright-background-color: ${({ theme }) =>
          theme.colors.brightBackground};
        --color: ${({ theme }) => theme.colors.color};
        --bright-color: ${({ theme }) => theme.colors.brightColor};
        --error-color: ${({ theme }) => theme.colors.error};

        --font-size-small: ${({ theme }) => theme.fontSizes.small};
        --font-size-medium: ${({ theme }) => theme.fontSizes.medium};
        --font-size-large: ${({ theme }) => theme.fontSizes.large};

        --font-weight-light: ${({ theme }) => theme.fontWeights.light};
        --font-weight-regular: ${({ theme }) => theme.fontWeights.regular};
        --font-weight-bold: ${({ theme }) => theme.fontWeights.bold};

        --gap: ${({ theme }) => theme.sizes.gap};
        --border-height: ${({ theme }) => theme.sizes.borderHeight};
        --border-radius: ${({ theme }) => theme.sizes.borderRadius};
    }

    body{
        background-color: var(--background-color);
        color: var(--color);
        font-family: 'Poppins', sans-serif;
        font-size: var(--font-size-medium);
        font-weight: var(--font-weight-regular);
    }

    html, body, #__next{
        height: 100%;
    }

    #__next{
        display: flex;
        flex-direction: column;
        max-height: 100vh;
    }

    ::selection{
        background-color: var(--color);
        color: var(--background-color);
    }

    ::-webkit-scrollbar{
        width: 10px;
    }

    ::-webkit-scrollbar-track{
        background-color: var(--bright-background-color);
    }

    ::-webkit-scrollbar-thumb{
        background-color: var(--color);
    }
`;

export default GlobalStyle;
