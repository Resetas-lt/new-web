"use client";

import { useTheme } from "next-themes";

// ICONS
import { CiDark, CiLight } from "react-icons/ci";

const ThemeButton = ({ className }) => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <button
      onClick={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))}
      className={`${className} dark:text-white rounded hover:bg-red-800 hover:text-white p-1`}
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
