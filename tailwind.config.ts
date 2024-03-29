import type { Config } from "tailwindcss";
import {fontFamily} from "tailwindcss/defaultTheme"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layout/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        Lemon: ["var(--font-lemon)", ...fontFamily.serif],
        Lemonada: ["var(--font-lemonada)", ...fontFamily.serif],
        Rubik_Microbe: ["var(--font-Rubik-Microbe)", ...fontFamily.mono],
        Rubik_Moonrocks: ["var(--font-RubikM)", ...fontFamily.serif],
        Twinkle: ["var(--font-Twinkle)", ...fontFamily.serif],
        Rye: ["var(--font-Rye)", ...fontFamily.serif],
        Rubik_Mono_One: ["var(--font-Rubik-Mono-One)", ...fontFamily.serif],
      },
      colors: {
        "light-yellow": "#FFF2D1",
        "Emoji": {
          "yellow-1": "#FFCA5C",
          "yellow-2": "#FF9626",
          "brown": "#301D00"
        },
      },
      keyframes: {
        bouncy: {
          '0%, 100%': {transform: 'translateY(0)'},
          '50%': {transform: 'translateY(10%)'},
        }
      }
    },
  },
  plugins: [],
};
export default config;
