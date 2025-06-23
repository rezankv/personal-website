import { ButtonHTMLAttributes, ReactNode } from "react";

// utils
import { cn } from "@app/utils";

// locals
import { Slot } from "..";

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  asChild?: boolean;
}

export const IconButton = ({
  asChild,
  className,
  children,
  ...props
}: IconButtonProps) => {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={cn(
        "ring-offset-background !border-border hover:bg-muted text-muted-foreground hover:text-foreground inline-flex !size-10 items-center justify-center rounded-md border bg-transparent whitespace-nowrap transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
        className,
      )}
      {...props}
    >
      {children}
    </Comp>
  );
};
