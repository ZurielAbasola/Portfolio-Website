"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const links = [
  {
    href: "#about",
    title: "About",
  },
  {
    href: "#projects",
    title: "Projects",
  },
  {
    href: "#skills",
    title: "Skills",
  },
  {
    href: "#contact",
    title: "Contact",
  },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed mx-auto top-0 left-0 right-0 z-10 bg-black bg-opacity-100">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link
          href={"/"}
          className="text-2xl font-semibold md:text-5xl text-white hover:text-blue-700"
        >
          Portfolio
        </Link>
        <div className="mobile-menu block md:hidden">
          {!menuOpen ? (
            <button
              onClick={() => setMenuOpen(true)}
              className="flex items-center px-3 py-2 border text-white rounded md:p-0 hover:text-blue-700 hover:border-blue-700"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setMenuOpen(false)}
              className="flex items-center px-3 py-2 border text-white rounded md:p-0 hover:text-blue-700 hover:border-blue-700"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {links.map((link, index) => (
              <li key={index}>
                <NavLink href={link.href} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {menuOpen ? <MenuOverlay links={links} /> : null}
    </nav>
  );
};

export default Navbar;
