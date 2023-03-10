import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Landing",
  description: "Welcome to the public landing page",
};

export default function Home() {
  return (
    <main>
      <h2 className={inter.className}>
        colpitts.dev <span>-&gt;</span>
      </h2>
      <p className={inter.className}>
        Find in-depth courses featuring Agile Frontend and Fullstack Web
        Development with TypeScript and GraphQL
      </p>
    </main>
  );
}
