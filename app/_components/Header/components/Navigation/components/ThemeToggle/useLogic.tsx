import { ReactNode, useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

// providers
import { Theme } from "@app/providers";

// components
import { Spinner } from "@app/components";

export const useLogic = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  /* -------------------------------------------------------------------------- */
  /*                                 SideEffects                                */
  /* -------------------------------------------------------------------------- */
  useEffect(() => {
    setMounted(true);
  }, []);

  /* -------------------------------------------------------------------------- */
  /*                                  Handlers                                  */
  /* -------------------------------------------------------------------------- */
  const toggleThemeHandler = () => {
    const _theme = theme as Theme;
    setTheme(_theme === "light" ? "dark" : "light");
  };

  const renderIconHandler = (theme: Theme): ReactNode => {
    if (!mounted) return <Spinner />;

    const icons: Record<Theme, ReactNode> = {
      dark: <Sun />,
      light: <Moon />,
    };
    return icons[theme];
  };

  return { toggleThemeHandler, theme: theme as Theme, renderIconHandler };
};
