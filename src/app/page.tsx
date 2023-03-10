import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Landing",
  description: "Welcome to the public landing page",
};

export default function Home() {
  return <main>HOME</main>;
}
