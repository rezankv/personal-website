import NextTopLoader from "nextjs-toploader";
import { ReactNode } from "react";

interface LoaderProviderProps {
  children: ReactNode;
}
export const LoaderProvider = ({ children }: LoaderProviderProps) => {
  return (
    <>
      <NextTopLoader color="var(--foreground)" />
      {children}
    </>
  );
};
