"use client";

import { useTheme } from "@app/lib/store/theme";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <button
      onClick={toggleTheme}
      className="group cursor-pointer"
      title="Toggle theme"
      aria-label="Toggle theme"
    >
      <div className="bg-foreground h-4 w-4 rounded duration-200 group-hover:scale-110 group-active:scale-95" />
    </button>
  );
};
