"use client";

import { useTheme } from "next-themes";

// ICONS
import { CiDark, CiLight } from "react-icons/ci";

const ThemeButton = ({ className }) => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      aria-label="Temos parinkimas"
      onClick={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))}
      className={`${className} dark:text-white rounded hover:bg-red-800 hover:text-white hover:cursor-pointer p-1`}
    >
      {theme === "light" ? (
        <CiDark size={28} />
      ) : (
        <CiLight className="dark:text-white" size={28} />
      )}
    </button>
  );
};

export default ThemeButton;
