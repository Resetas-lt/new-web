"use client";

import { useState } from "react";

// ICONS
import logo from "@/public/assets/images/logo.webp";
import logoBlack from "@/public/assets/images/logo-black.svg";

import Link from "next/link";
import Image from "next/image";

import { useTheme } from "next-themes";

import { IoMdMenu } from "react-icons/io";

import ThemeButton from "./ThemeButton";

const Navbar = () => {
  const { theme } = useTheme();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const logoSrc = theme === "light" ? logoBlack : logo;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="dark:border-b-gray-700">
        <nav className="bg-white border-gray-200 dark:bg-zinc-950">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <Link href="/" className="flex items-center">
              <Image src={logoSrc} width={140} alt="Resetas Logo" />
            </Link>
            <div className="flex md:order-2 space-x-3 md:space-x-0">
              <ThemeButton />

              <button
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-cta"
                aria-expanded="false"
                onClick={toggleMenu}
              >
                <span className="sr-only">Menu</span>
                <IoMdMenu size={24} />
              </button>
            </div>

            <div
              className={`items-center justify-between ${
                isMenuOpen ? "flex" : "hidden"
              } w-full md:flex md:w-auto md:order-1`}
            >
              <ul className="flex flex-col w-full font-medium p-4 md:p-0 mt-4 border rounded-lg md:space-x-8 md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-zinc-950  dark:border-gray-700">
                <li>
                  <Link
                    href="#"
                    className="block font-semibold py-2 px-3 md:p-0 text-white bg-red-700 rounded md:bg-transparent md:text-red-700 md:dark:text-red-500 transition-all ease-in-out"
                    aria-current="page"
                  >
                    Pagrindinis
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="block font-semibold py-2 px-3 md:p-0 rounded md:hover:bg-transparent md:hover:text-red-700 md:dark:hover:text-red-500 dark:text-white transition-all ease-in-out"
                  >
                    Apie
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="block font-semibold py-2 px-3 md:p-0 rounded md:hover:bg-transparent md:hover:text-red-700 md:dark:hover:text-red-500 dark:text-white transition-all ease-in-out"
                  >
                    Paslaugos
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="block font-semibold py-2 px-3 md:p-0 rounded md:hover:bg-transparent md:hover:text-red-700 md:dark:hover:text-red-500 dark:text-white transition-all ease-in-out"
                  >
                    Kontaktai
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
