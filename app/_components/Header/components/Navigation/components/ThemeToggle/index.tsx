"use client";

// locals
import { useLogic } from "./useLogic";

export const ThemeToggle = () => {
  const { toggleThemeHandler, renderIconHandler, theme } = useLogic();

  return (
    <button
      onClick={toggleThemeHandler}
      className="group cursor-pointer transition"
      title="Toggle theme"
      aria-label="Toggle theme"
    >
      {renderIconHandler(theme)}
    </button>
  );
};
