import Link from "next/link";

// constants
import { routes } from "@app/constants";

// locals
import { Avatar, Navigation } from "./components";

export const Header = () => {
  return (
    <header className="mx-4">
      <nav className="flex items-center justify-between">
        <Link href={routes.HOME_ROUTE}>
          <Avatar />
        </Link>
        <Navigation />
      </nav>
    </header>
  );
};
