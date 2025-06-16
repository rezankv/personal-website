import { ReactNode } from "react";

// locals
import { ThemeProvider } from "./Theme";
import { LoaderProvider } from "./Loader";
export * from "./Theme";

interface ProvidersProps {
  children: ReactNode;
}
export const Providers = ({ children }: ProvidersProps) => {
  return (
    <>
      <ThemeProvider>
        <LoaderProvider>{children}</LoaderProvider>
      </ThemeProvider>
    </>
  );
};
