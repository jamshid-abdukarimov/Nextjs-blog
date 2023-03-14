import "src/styles/globals.css";
import type { AppProps } from "next/app";
import { Roboto } from "next/font/google";
import { CacheProvider, EmotionCache } from "@emotion/react";
import createEmotionCache from "../helpers/createCache";
import Head from "next/head";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../helpers/theme";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  style: ["italic", "normal"],
  subsets: ["latin"],
});
const clientSideEmotionCache = createEmotionCache();

export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function App(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <main className={roboto.className}>
          <Component {...pageProps} />
        </main>
      </ThemeProvider>
    </CacheProvider>
  );
}
