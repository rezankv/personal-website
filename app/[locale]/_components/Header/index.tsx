import { getLocale } from "next-intl/server";

// constants
import { routes } from "@app/constants";

// i18n
import { Link } from "@app/i18n/navigation";

// locals
import { ThemeToggle, LocaleMenu, Avatar, Navigation } from "./components";

export const Header = async () => {
  const locale = await getLocale();

  return (
    <header className="mx-4">
      <nav className="flex items-center justify-between">
        <Link locale={locale} href={routes.HOME_ROUTE}>
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
