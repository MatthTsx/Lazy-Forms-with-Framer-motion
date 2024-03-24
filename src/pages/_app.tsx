import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Lemon, Lemonada, Rubik_Microbe, Rubik_Moonrocks } from "next/font/google";

const lemon = Lemon({
  weight: "400",
  variable: "--font-lemon",
  subsets: ["latin"]
})
const lemonada = Lemonada({
  weight: "400",
  variable: "--font-lemonada",
  subsets: ["latin"]
})
const Rubik_Mi = Rubik_Microbe({
  weight: "400",
  variable: "--font-Rubik-Microbe",
  subsets: ["latin"]
})
const Rubik_Mo = Rubik_Moonrocks({
  weight: "400",
  variable: "--font-RubikM",
  subsets: ["latin"]
})

export default function App({ Component, pageProps }: AppProps) {
  return <main className={`${lemon.variable} ${lemonada.variable} ${Rubik_Mo.variable} ${Rubik_Mi.variable}`}>
    <Component {...pageProps} />;
  </main>
}
