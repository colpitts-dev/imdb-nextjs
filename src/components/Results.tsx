export interface ResultProps {
  original_title: string;
}

export const Results = ({ results }: { results: ResultProps[] }) => {
  return (
    <div>
      {results.map((result: ResultProps, i: number) => {
        console.log({ result });
        return (
          <div key={i}>
            <p>{result.original_title}</p>
          </div>
        );
      })}
    </div>
  );
};
