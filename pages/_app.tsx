import type { AppProps } from "next/app";
import Head from "next/head";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import "antd/dist/antd.css";

import { colors } from "@/constants";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    box-sizing: border-box;
    font-family: 'Spoqa Han Sans Neo', 'sans-serif';
  }
  p, h1, h2, h3, ul {
    margin: 0;
  }

  html, body {
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;

    font-size: 10px;
    line-height: 1.4;

    background-color: ${colors.gray9};

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .ant-modal, .ant-modal-body {
    width: fit-content !important;
    height: fit-content !important;
    border-radius: 0.8rem;
  }
  .ant-modal-close {
    display: none;
  }
`;

const theme = {
  colors,
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <link
          rel="import"
          href="//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css"
        />
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
