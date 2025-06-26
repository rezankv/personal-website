import { ReactNode } from "react";

// styles
import "@app/styles";

// Since we have a `not-found.tsx` page on the root, a layout file
// is required, even if it's just passing children through.
export default function RootLayout({ children }: { children: ReactNode }) {
  return children;
}
