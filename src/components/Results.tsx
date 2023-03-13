import { Card } from "./Card";

export interface ResultProps {
  id: string;
  original_title: string;
  name?: string;
  overview: string;
  poster_path: string;
  release_date?: string;
  first_air_date?: string;
  vote_count?: number;
}

export const Results = ({ results }: { results: ResultProps[] }) => {
  return (
    <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
      {results.map((result: ResultProps) => {
        return <Card key={result.id} result={result} />;
      })}
    </div>
  );
};
