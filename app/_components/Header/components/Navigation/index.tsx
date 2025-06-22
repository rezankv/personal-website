"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// constants
import { routes } from "@app/constants";

// utils
import { cn } from "@app/utils";

// locals
import { NavigationMenu, ThemeToggle } from "./components";

export const Navigation = () => {
  const pathname = usePathname();

  const navItems = [
    {
      href: routes.PROJECTS_ROUTE,
      label: "Projects",
      isActive: pathname === routes.PROJECTS_ROUTE,
    },
    {
      href: routes.POSTS_ROUTE,
      label: "Posts",
      isActive: pathname === routes.POSTS_ROUTE,
    },
  ];
  return (
    <div className="flex items-center gap-1 md:gap-4">
      <ThemeToggle />
      <NavigationMenu />
      <ul className="order-1 hidden items-center gap-3 sm:gap-4 md:flex">
        {navItems.map((navItem) => (
          <li key={navItem.href}>
            <Link
              href={navItem.href}
              className={cn(
                "hover:text-foreground text-sm transition-colors sm:text-base",
                navItem.isActive
                  ? "text-foreground font-medium"
                  : "text-muted-foreground",
              )}
            >
              {navItem.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
