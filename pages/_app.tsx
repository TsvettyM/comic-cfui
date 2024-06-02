import type { AppProps } from "next/app";
import { Nunito } from "next/font/google";
import Head from "next/head";
import "@/styles/global.css";
import axios from "axios";

const nunito = Nunito({
  weight: ["500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export default function MyApp({ Component, pageProps }: AppProps) {
  axios.defaults.baseURL = "http://localhost:3000/api";

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, minimum-scale=1.0 interactive-widget=resizes-content"
        />
      </Head>

      <main className={nunito.className}>
        <Component {...pageProps} />
      </main>
    </>
  );
}
