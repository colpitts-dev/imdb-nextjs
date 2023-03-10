import { Results } from "@/components/Results";

type PageProps = {
  params?: {
    num?: string;
  };
  searchParams?: {
    genre: string;
  };
};

export const metadata = {
  title: "Landing",
  description: "Welcome to the public landing page",
};

const API_KEY = process.env.API_KEY;
const BASE_URL = `https://api.themoviedb.org/3/`;

export default async function Home(props: PageProps) {
  const genre = props.searchParams?.genre || "fetchTrending";

  const res = await fetch(
    `${BASE_URL}${
      genre === "fetchTopRated" ? "movie/top_rated" : "trending/all/day"
    }?api_key=${API_KEY}&language=en-US&page=1`,
    { next: { revalidate: 10000 } }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();

  const results = data.results;

  return (
    <article>
      <section className="flex items-center justify-between max-w-6xl py-6 mx-2 xl:mx-auto">
        <Results results={results} />
      </section>
    </article>
  );
}
