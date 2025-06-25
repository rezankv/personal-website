import Link from "next/link";

// constants
import { routes } from "@app/constants";

// locals
import { ThemeToggle, LocaleMenu, Avatar, Navigation } from "./components";

export const Header = () => {
  return (
    <header className="mx-4">
      <nav className="flex items-center justify-between">
        <Link href={routes.HOME_ROUTE}>
          <Avatar />
        </Link>
        <div className="flex items-center gap-1 md:gap-2">
          <Navigation />
          <LocaleMenu />
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
};
