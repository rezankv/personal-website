import { ThemeProvider as NextThemeProvider } from "next-themes";
import { ReactNode } from "react";

export type Theme = "light" | "dark";
interface ThemeProviderProps {
  children: ReactNode;
}
export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return (
    <>
      <NextThemeProvider
        attribute="class"
        defaultTheme="light"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </NextThemeProvider>
    </>
  );
};
