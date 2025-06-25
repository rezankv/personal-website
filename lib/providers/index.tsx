import { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";

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
      <NextIntlClientProvider>
        <ThemeProvider>
          <LoaderProvider>{children}</LoaderProvider>
        </ThemeProvider>
      </NextIntlClientProvider>
    </>
  );
};
