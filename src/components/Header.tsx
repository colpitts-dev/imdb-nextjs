import Link from "next/link";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { DarkModeSwitch } from "./DarkModeSwitch";
import { MenuItem } from "./MenuItem";

export default function Header() {
  return (
    <header className="flex items-center justify-between max-w-6xl py-6 mx-2 xl:mx-auto">
      <div className="flex items-center space-x-2">
        <Link href="/">
          <h2>
            <span className="px-2 py-1 mr-1 text-2xl font-bold rounded-lg bg-primary">
              IMDb
            </span>
            <span className="hidden text-xl sm:inline">Clone</span>
          </h2>
        </Link>
      </div>
      <nav className="flex">
        <MenuItem title="HOME" address="/" Icon={AiFillHome} />
        <MenuItem title="ABOUT" address="/about" Icon={BsFillInfoCircleFill} />
        <DarkModeSwitch />
      </nav>
    </header>
  );
}
