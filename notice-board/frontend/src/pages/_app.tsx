import GlobalStyle from "@/style/global-style";
import type { AppProps } from "next/app";
import styled from "styled-components";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <GlobalStyle />
      <Layout>
        <Content>
          <Component {...pageProps} />
        </Content>
      </Layout>
    </div>
  );
}

const Layout = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  width: 85vw;
  height: 80vh;
  /* background-color: blue; */
`;
