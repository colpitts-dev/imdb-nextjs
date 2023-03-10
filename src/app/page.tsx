export const metadata = {
  title: "Landing",
  description: "Welcome to the public landing page",
};

export default function Home() {
  return (
    <article>
      <section className="flex items-center justify-between max-w-6xl py-6 mx-2 xl:mx-auto">
        <h1 className="text-2xl text-medium">
          <span>HOME PAGE</span>
        </h1>
      </section>
    </article>
  );
}
