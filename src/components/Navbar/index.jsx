"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { CgMenuLeftAlt, CgClose } from "react-icons/cg";
export const navLinks = [
  "breaking",
  "entertainment",
  "health",
  "lifestyle",
  "technology",
];

const Navbar = () => {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <nav className="shadow fixed w-full z-10 top-0 bg-white">
      <section className="relative h-12 max-w-7xl flex items-center justify-between mx-auto px-5 lg:px-0">
        <Link href="/" className="text-xl">
          Briefism
        </Link>
        <ul className="hidden sm:flex items-center h-full text-sm capitalize">
          {navLinks.map((i, j, k) => (
            <Link
              key={i}
              href={`/${i}`}
              style={{ color: pathname.includes(i) && "#dc2626" }}
              className={`hover:text-red-600 cursor-pointer h-full flex items-center justify-center ${
                j === 0
                  ? "pl-0 pr-2.5"
                  : j === k.length - 1
                  ? "pr-0 pl-2.5"
                  : "px-2.5"
              }`}
            >
              {i}
            </Link>
          ))}
        </ul>
        <button
          onClick={() => setOpenMenu(!openMenu)}
          className="absolute right-5 block sm:hidden text-2xl cursor-pointer text-slate-400"
        >
          {openMenu ? <CgClose className="" /> : <CgMenuLeftAlt className="" />}
        </button>
      </section>
      {openMenu && (
        <ul className="text-sm capitalize">
          {navLinks.map((i) => (
            <Link
              key={i}
              href={`/${i}`}
              onClick={() => setOpenMenu(false)}
              className="px-5 py-2.5 hover:bg-slate-100 hover:text-red-600 border-t block"
            >
              {i}
            </Link>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
