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
import MobileSidebar from "./MobileSidebar";

const Navbar = () => {
  const { theme } = useTheme();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownStates, setDropdownStates] = useState({});

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
    }, 100);

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

  // Sidebar navigation structure
  const sidebarLinks = [
    {
      label: "IT Paslaugos",
      children: [
        { label: "IT priežiūra", href: "/it-paslaugos/it-prieziura" },
        { label: "Programavimas", href: "/it-paslaugos/programavimas" },
        {
          label: "Kompiuterių remontas",
          href: "/it-paslaugos/kompiuteriu-remontas",
        },
        {
          label: "Spausdintuvų remontas",
          href: "/it-paslaugos/spausdintuvu-remontas",
        },
      ],
    },
    {
      label: "Prekyba",
      children: [
        { label: "Nauja įranga", href: "#" },
        { label: "Naudota įranga", href: "#" },
        { label: "Eksploatacinės medžiagos", href: "#" },
        { label: "Spausdinimo reikmenys", href: "#" },
      ],
    },
    {
      label: "Nuoma",
      children: [
        { label: "Serverių", href: "#" },
        { label: "Spausdintuvų", href: "#" },
      ],
    },
    {
      label: "Sprendimai",
      children: [
        { label: "Kopijavimo sistemos", href: "#" },
        { label: "Apsaugos priemonės", href: "#" },
        { label: "Duomenų kopijos", href: "#" },
        { label: "Debesijos sistemos", href: "#" },
      ],
    },
    {
      label: "Kitos paslaugos",
      children: [{ label: "Konsultacijos", href: "#" }],
    },
    {
      label: "Kontaktai",
      href: "/#kontaktai",
    },
  ];

  return (
    <>
      {/* Mobile Sidebar */}
      <MobileSidebar
        isOpen={isMenuOpen}
        onClose={toggleMenu}
        links={sidebarLinks}
      />

      <header
        className={`fixed ${
          isScrolled ? "top-0" : "2xl:top-12"
        } w-full z-50 dark:border-b-gray-700 transition-transform`}
      >
        <nav className="bg-white border-gray-200 dark:bg-zinc-950">
          <div className="max-w-(--breakpoint-xl) flex flex-wrap items-center justify-between mx-auto p-4">
            <Link href="/" className="flex items-center">
              <Image
                className="hover:opacity-80 transition ease-in-out hover:scale-95"
                src={logoSrc}
                width={140}
                alt="Resetas"
              />
            </Link>
            <div className="flex md:order-2 space-x-3 md:space-x-0">
              <ThemeButton />

              {/* MOBILE MENU BUTTON */}
              <button
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-hidden focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-cta"
                aria-expanded={isMenuOpen}
                onClick={toggleMenu}
              >
                <span className="sr-only">Menu</span>
                <IoMdMenu size={24} />
              </button>
            </div>

            {/* Desktop menu only */}
            <div className="hidden md:flex items-center justify-between w-full md:w-auto md:order-1">
              <ul className="flex flex-col w-full font-medium p-4 md:p-0 mt-4 dark:border dark:md:border-none shadow-md md:shadow-none rounded-lg md:space-x-8 md:flex-row md:mt-0 dark:border-gray-800">
                <DropdownMenu
                  menuName="IT Paslaugos"
                  dropdownStates={dropdownStates}
                  isOpen={dropdownStates["IT Paslaugos"]}
                  onClick={() => handleClick("IT Paslaugos")}
                  onMouseEnter={() => handleMouseEnter("IT Paslaugos")}
                  onMouseLeave={() => handleMouseLeave("IT Paslaugos")}
                >
                  <li>
                    <Link
                      href="/it-paslaugos/it-prieziura"
                      className="dropdown-item"
                    >
                      IT priežiūra
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/it-paslaugos/programavimas"
                      className="dropdown-item"
                    >
                      Programavimas
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/it-paslaugos/kompiuteriu-remontas"
                      className="dropdown-item"
                    >
                      Kompiuterių remontas
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/it-paslaugos/spausdintuvu-remontas"
                      className="dropdown-item"
                    >
                      Spausdintuvų remontas
                    </Link>
                  </li>
                </DropdownMenu>
                <DropdownMenu
                  menuName="Prekyba"
                  dropdownStates={dropdownStates}
                  isOpen={dropdownStates["Prekyba"]}
                  onClick={() => handleClick("Prekyba")}
                  onMouseEnter={() => handleMouseEnter("Prekyba")}
                  onMouseLeave={() => handleMouseLeave("Prekyba")}
                >
                  <li>
                    <Link href="#" className="dropdown-item">
                      Nauja įranga
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="dropdown-item">
                      Naudota įranga
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="dropdown-item">
                      Eksploatacinės medžiagos
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="dropdown-item">
                      Spausdinimo reikmenys
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
                      Serverių
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="dropdown-item">
                      Spausdintuvų
                    </Link>
                  </li>
                </DropdownMenu>
                <DropdownMenu
                  menuName="Sprendimai"
                  dropdownStates={dropdownStates}
                  isOpen={dropdownStates["Sprendimai"]}
                  onClick={() => handleClick("Sprendimai")}
                  onMouseEnter={() => handleMouseEnter("Sprendimai")}
                  onMouseLeave={() => handleMouseLeave("Sprendimai")}
                >
                  <li>
                    <Link href="#" className="dropdown-item">
                      Kopijavimo sistemos
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="dropdown-item">
                      Apsaugos priemonės
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="dropdown-item">
                      Duomenų kopijos
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="dropdown-item">
                      Debesijos sistemos
                    </Link>
                  </li>
                </DropdownMenu>
                <DropdownMenu
                  menuName="Kitos paslaugos"
                  dropdownStates={dropdownStates}
                  isOpen={dropdownStates["Kitos paslaugos"]}
                  onClick={() => handleClick("Kitos paslaugos")}
                  onMouseEnter={() => handleMouseEnter("Kitos paslaugos")}
                  onMouseLeave={() => handleMouseLeave("Kitos paslaugos")}
                >
                  <li>
                    <Link href="#" className="dropdown-item">
                      Konsultacijos
                    </Link>
                  </li>
                </DropdownMenu>
                <li>
                  <Link
                    href="/#kontaktai"
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
