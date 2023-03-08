import type { AppProps } from "next/app";
import styled from "styled-components";
import GlobalStyle from "../../styles/GlobalStyles";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <GlobalStyle />
      <Component {...pageProps} />
    </Layout>
  );
}

const Layout = styled.div`
  width: 100vw;
  height: 100vh;
  min-width: 500px;
  min-height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
