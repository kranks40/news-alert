import React from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import Link from "next/link";
import NavLinks from "./NavLinks";
import SearchBox from "./SearchBox";
import DarkModeButton from "./DarkModeButton";

const Header = () => {
  return (
    <header>
      <div className="grid grid-cols-3 p-10 item-center">
        <Bars3Icon className="h-8 w-8 cursor-pointer" />
        <Link href="/" prefetch={false}>
          <h1 className="font-serif text-4xl text-center flex-1">
            <span className="underline decoration-6 decoration-blue-400">
              News Alert
            </span>
          </h1>
        </Link>

        <div className="flex item-center justify-en space-x-2">
          {/* DarkmodeButton */}
          <DarkModeButton />
          <button className="hidden md:inline bg-slate-600 text-white px-4 lg:px-8 py-2 lg:py-4 rounded-full dark:bg-slate-800">
            Subscibe Now
          </button>
        </div>
      </div>

      <NavLinks />
      <SearchBox />
    </header>
  );
};

export default Header;
