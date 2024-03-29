import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Lemon, Lemonada, Rubik_Microbe, Rubik_Moonrocks, Twinkle_Star, Rye, Rubik_Mono_One, Rubik_Glitch } from "next/font/google";

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
const Twinkle = Twinkle_Star({
  weight: "400", variable: "--font-Twinkle", subsets: ["latin"]
})
const rye = Rye({
  weight: "400", variable: "--font-Rye", subsets: ["latin"]
})
const Rubik_mono_1 = Rubik_Mono_One({
  weight: "400", variable: "--font-Rubik-Mono-One", subsets: ["latin"]
})
const Rubik_glitch = Rubik_Glitch({
  weight: "400", variable: "--font-Rubik-Glitch", subsets: ["latin"]
})

export default function App({ Component, pageProps }: AppProps) {
  return <main className={`
    ${lemon.variable} ${lemonada.variable} ${Rubik_Mo.variable}
    ${Rubik_Mi.variable} ${Twinkle.variable} ${rye.variable}
    ${Rubik_mono_1.variable} ${Rubik_glitch.variable}
  `}>
    <Component {...pageProps} />;
  </main>
}
