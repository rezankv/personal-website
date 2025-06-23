"use client";

import {
  Menu,
  MenuButton,
  MenuItem,
  MenuDivider,
  MenuHeader,
} from "@szhsin/react-menu";
import "./index.css";
import { ReactNode } from "react";

export interface DropdownMenuItem {
  type?: "item" | "divider" | "header";
  label?: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

export interface DropdownMenuProps {
  trigger: ReactNode;
  triggerClassName?: string;
  items: DropdownMenuItem[];
  align?: "start" | "center" | "end";
  direction?: "top" | "bottom" | "left" | "right";
}

export const DropdownMenu = ({
  trigger,
  items,
  align = "start",
  direction = "bottom",
  triggerClassName,
}: DropdownMenuProps) => {
  return (
    <Menu
      menuButton={
        <MenuButton className={triggerClassName}>{trigger}</MenuButton>
      }
      transition
      align={align}
      direction={direction}
      menuClassName="dropdown"
    >
      {items.map((item, index) => {
        if (item.type === "divider") return <MenuDivider key={index} />;
        if (item.type === "header")
          return <MenuHeader key={index}>{item.label}</MenuHeader>;
        return (
          <MenuItem
            className="dropdown-item"
            key={index}
            onClick={item.onClick}
            disabled={item.disabled}
          >
            {item.label}
          </MenuItem>
        );
      })}
    </Menu>
  );
};
