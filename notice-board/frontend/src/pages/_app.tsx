import GlobalStyle from "@/style/global-style";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <GlobalStyle />
      <Component {...pageProps} />
    </div>
  );
}
