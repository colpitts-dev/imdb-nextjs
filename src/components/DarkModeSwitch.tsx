"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { MdLightMode } from "react-icons/md";
import { BsFillMoonFill } from "react-icons/bs";

export const DarkModeSwitch = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = theme === "system" ? systemTheme : theme;

  const handleDarkModeToggle = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <button onClick={handleDarkModeToggle}>
      {mounted && currentTheme === "dark" ? (
        <MdLightMode className="mx-4 text-xl cursor-pointer hover:text-primary" />
      ) : (
        <BsFillMoonFill className="mx-4 text-xl cursor-pointer hover:text-primary" />
      )}
    </button>
  );
};
