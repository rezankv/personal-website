"use client";

import { ArrowDown } from "lucide-react";
import { ReactNode, useState } from "react";

// utils
import { cn } from "@app/utils";

// locals
import { IconButton } from "..";

interface ShowMoreProps {
  children: ReactNode;
}
export const ShowMore = ({ children }: ShowMoreProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative flex flex-col items-center">
      <div
        className={cn(
          "overflow-y-hidden transition-[max-height] duration-300 ease-in-out",
          isOpen ? "max-h-[5000px]" : "max-h-64",
        )}
      >
        {children}
      </div>

      {!isOpen && (
        <div className="from-background pointer-events-none absolute right-0 bottom-0 left-0 h-42 bg-gradient-to-t to-transparent" />
      )}
      {!isOpen && (
        <IconButton
          onClick={() => setIsOpen(true)}
            className="bg-background absolute bottom-0 animate-bounce cursor-pointer rounded-full"
        >
          <ArrowDown />
        </IconButton>
      )}
    </div>
  );
};
