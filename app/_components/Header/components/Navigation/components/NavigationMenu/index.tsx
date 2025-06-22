import Link from "next/link";
import { usePathname } from "next/navigation";
import { MenuIcon } from "lucide-react";

// components
import { DropdownMenu, IconButton } from "@app/components";

// constants
import { routes } from "@app/constants";

// utils
import { cn } from "@app/utils";

export const NavigationMenu = () => {
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
    <DropdownMenu
      triggerClassName="md:hidden"
      trigger={
        <IconButton className="cursor-pointer">
          <MenuIcon />
        </IconButton>
      }
      items={navItems.map(({ label, href, isActive }) => ({
        label: (
          <Link
            className={cn("w-full hover:underline", isActive && "underline")}
            href={href}
            key={href}
          >
            {label}
          </Link>
        ),
      }))}
      align="end"
      direction="bottom"
    />
  );
};
