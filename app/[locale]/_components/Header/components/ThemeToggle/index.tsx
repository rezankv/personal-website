"use client";

// components
import { IconButton } from "@app/components";

// locals
import { useLogic } from "./useLogic";

export const ThemeToggle = () => {
  const { toggleThemeHandler, renderIconHandler, theme } = useLogic();

  return (
    <IconButton
      onClick={toggleThemeHandler}
      className="group cursor-pointer transition"
      title="Toggle theme"
      aria-label="Toggle theme"
    >
      {renderIconHandler(theme)}
    </IconButton>
  );
};
