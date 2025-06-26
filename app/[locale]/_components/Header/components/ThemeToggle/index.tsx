"use client";

// components
import { IconButton } from "@app/components";

// providers
import { Theme } from "@app/providers";

// locals
import { useLogic } from "./useLogic";

export const ThemeToggle = () => {
  const { themes, changeThemeHandler, renderIconHandler, theme } = useLogic();

  return (
    <IconButton
      onClick={() => changeThemeHandler(theme, themes as Theme[])}
      className="group cursor-pointer transition"
      title="Toggle theme"
      aria-label="Toggle theme"
    >
      {renderIconHandler(theme)}
    </IconButton>
  );
};
