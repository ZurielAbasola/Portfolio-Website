import Link from "next/link";
import React from "react";
import NavLink from "./NavLink";

const links = [
  { href: "#about", title: "About" },
  { href: "#projects", title: "Projects" },
  { href: "#skills", title: "Skills" },
  { href: "#contact", title: "Contact" },
];

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-black bg-opacity-90">
      <div className="flex container lg:py-4 items-center justify-between mx-auto px-4 py-2">
        <Link
          href={"/"}
          className="text-2xl font-semibold md:text-5xl text-white hover:text-blue-700"
        >
          Portfolio
        </Link>
        <div className="mobile-menu block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {links.map((link, index) => (
              <li key={index}>
                <NavLink href={link.href} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
