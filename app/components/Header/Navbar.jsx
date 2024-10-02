"use client";

import { useState, useEffect } from "react";

// ICONS
import logo from "@/public/assets/images/logo.webp";
import logoBlack from "@/public/assets/images/logo-black.svg";

import Link from "next/link";
import Image from "next/image";

import { useTheme } from "next-themes";

import { IoMdMenu } from "react-icons/io";

// COMPONENTS
import DropdownMenu from "../Menu/Dropdown";
import ThemeButton from "./ThemeButton";

const Navbar = () => {
  const { theme } = useTheme();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownStates, setDropdownStates] = useState({});
  const [dropdownTimeout, setDropdownTimeout] = useState(null);

  const logoSrc = theme === "light" ? logoBlack : logo;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMouseEnter = (menuName) => {
    setDropdownStates((prevState) => ({
      ...prevState,
      [menuName]: true,
    }));
  };

  const handleMouseLeave = (menuName) => {
    const timeout = setTimeout(() => {
      setDropdownStates((prevState) => ({
        ...prevState,
        [menuName]: false,
      }));
    }, 150);

    setDropdownStates((prevState) => ({
      ...prevState,
      [`${menuName}Timeout`]: timeout,
    }));
  };

  const handleClick = (menuName) => {
    setDropdownStates((prevState) => ({
      ...prevState,
      [menuName]: !prevState[menuName],
    }));
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`fixed ${
          isScrolled ? "top-0" : "md:top-13"
        } w-full z-50 dark:border-b-gray-700 transition-transform`}
      >
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
                <DropdownMenu
                  menuName="IT Paslaugos"
                  dropdownStates={dropdownStates}
                  isOpen={dropdownStates["IT Paslaugos"]}
                  onClick={() => handleClick("IT Paslaugos")}
                  onMouseEnter={() => handleMouseEnter("IT Paslaugos")}
                  onMouseLeave={() => handleMouseLeave("IT Paslaugos")}
                >
                  <li>
                    <Link href="#" className="dropdown-item">
                      IT Aptarnavimas
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="dropdown-item">
                      Kompiuterių remontas
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="dropdown-item">
                      Spausdintuvų remontas
                    </Link>
                  </li>
                </DropdownMenu>

                <DropdownMenu
                  menuName="Nuoma"
                  dropdownStates={dropdownStates}
                  isOpen={dropdownStates["Nuoma"]}
                  onClick={() => handleClick("Nuoma")}
                  onMouseEnter={() => handleMouseEnter("Nuoma")}
                  onMouseLeave={() => handleMouseLeave("Nuoma")}
                >
                  <li>
                    <Link href="#" className="dropdown-item">
                      Spausdintuvų
                    </Link>
                  </li>

                  <li>
                    <Link href="#" className="dropdown-item">
                      Serverių
                    </Link>
                  </li>
                </DropdownMenu>

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
