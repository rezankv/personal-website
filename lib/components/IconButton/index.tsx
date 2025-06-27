import { ButtonHTMLAttributes } from "react";

// utils
import { cn } from "@app/utils";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
}

export const IconButton = ({
  className,
  children,
  ...props
}: IconButtonProps) => {
  return (
    <button
      className={cn(
        "ring-offset-background !border-border hover:bg-muted text-muted-foreground hover:text-foreground inline-flex !size-10 items-center justify-center rounded-md border bg-transparent whitespace-nowrap transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};
