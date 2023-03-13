import { FiThumbsUp } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";
import { ResultProps } from "./Results";

export const Card = ({ result }: { result: ResultProps }) => {
  return (
    <div className="m-0 mb-8 rounded-lg cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md sm:border sm:border-slate-400 sm:m-2 group">
      <Link href={"/"}>
        <div className="relative w-full h-[500px] sm:h-[256px] lg:h-[368px]">
          <Image
            src={`https://image.tmdb.org/t/p/w500/${result.poster_path}`}
            fill
            sizes="auto"
            className="top-0 left-0 object-cover object-top w-full h-full transition-opacity duration-200 sm:rounded-t-lg group-hover:opacity-80"
            alt="Image of movie poster"
            placeholder="blur"
            blurDataURL={"/spinner.svg"}
          />
        </div>
        <div className="p-2">
          <p className="mb-4 line-clamp-2">{result.overview}</p>
          <h2 className="text-lg font-bold truncate">
            {result.original_title || result?.name}
          </h2>
          <div className="flex items-center justify-between">
            <p>{result?.release_date || result?.first_air_date} </p>
            <p className="flex items-center space-x-2 ">
              <FiThumbsUp className="text-slate-400" />
              <span>{result.vote_count}</span>{" "}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};
