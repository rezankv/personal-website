import { ReactNode, useEffect, useState } from "react";
import { MonitorCog, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

// providers
import { Theme } from "@app/providers";

// components
import { Spinner } from "@app/components";

export const useLogic = () => {
  const { theme, setTheme, themes } = useTheme();
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
  const changeThemeHandler = (currentTheme: Theme, themes: Theme[]) => {
    const currentThemeIndex = themes.indexOf(currentTheme);
    const nextThemeIndex = (currentThemeIndex + 1) % themes.length;
    const nextThem = themes[nextThemeIndex];
    setTheme(nextThem);
  };

  const renderIconHandler = (theme: Theme): ReactNode => {
    if (!mounted) return <Spinner />;

    const icons: Record<Theme, ReactNode> = {
      dark:  <Moon />,
      light:<Sun />,
      system: <MonitorCog />,
    };
    return icons[theme];
  };

  return {
    themes,
    changeThemeHandler,
    theme: theme as Theme,
    renderIconHandler,
  };
};
