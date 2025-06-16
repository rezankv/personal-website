import { ReactNode } from "react";
import { Moon, Sun } from "lucide-react";

// store
import { Theme, useTheme } from "@app/lib/store/theme";

export const useLogic = () => {
  const { theme, setTheme } = useTheme();

  /* -------------------------------------------------------------------------- */
  /*                                  Handlers                                  */
  /* -------------------------------------------------------------------------- */
  const toggleThemeHandler = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const renderIconHandler = (theme: Theme) => {
    const icons: Record<Theme, ReactNode> = {
      dark: <Sun />,
      light: <Moon />,
    };

    return icons[theme];
  };

  return { toggleThemeHandler, theme, renderIconHandler };
};
