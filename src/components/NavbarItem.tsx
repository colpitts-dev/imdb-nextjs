"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

export interface NavbarItemProps {
  title: string;
  param: string;
}

export const NavbarItem: React.FC<NavbarItemProps> = ({ title, param }) => {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");

  return (
    <Link
      href={`/?genre=${param}`}
      className={`hover:text-amber-600 dark:hover:text-primary font-semibold ${
        genre &&
        genre === param &&
        "underline underline-offset-8 decoration-4 decoration-amber-600 dark:decoration-primary rounded-lg"
      }`}
    >
      {title}
    </Link>
  );
};
