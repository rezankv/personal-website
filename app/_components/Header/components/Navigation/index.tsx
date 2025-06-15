"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// constants
import { routes } from "@app/constants";

// utils
import { cn } from "@app/utils";

// locals
import { ThemeToggle } from "./components";

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
    <ul className="flex gap-4">
      {navItems.map((navItem) => (
        <li key={navItem.href}>
          <Link
            href={navItem.href}
            className={cn(
              "hover:text-foreground transition-colors",
              navItem.isActive
                ? "text-foreground font-medium"
                : "text-muted-foreground",
            )}
          >
            {navItem.label}
          </Link>
        </li>
      ))}
      <ThemeToggle />
    </ul>
  );
};
