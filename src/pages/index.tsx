import { Inter } from "next/font/google";
import Main from "@/layout/Main";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`${inter.className} h-[100vh] w-full`}
    >
      <Main/>
    </main>
  );
}
