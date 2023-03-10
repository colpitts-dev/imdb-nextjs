import { NavbarItem } from "./NavbarItem";

export const Navbar = () => {
  return (
    <nav className="flex justify-center w-full p-4 py-2 space-x-4 text-lg dark:bg-gray-600 bg-amber-100">
      <NavbarItem title="Trending" param="fetchTrending" />
      <NavbarItem title="Top Rated" param="fetchTopRated" />
    </nav>
  );
};
