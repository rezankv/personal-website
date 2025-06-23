import { HTMLAttributes } from "react";

// utils
import { cn } from "@app/utils";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface IconButtonProps extends HTMLAttributes<HTMLButtonElement> {}
export const IconButton = ({
  children,
  className,
  ...props
}: IconButtonProps) => {
  return (
    <span
      className={cn(
        "ring-offset-background  border-border hover:bg-muted text-muted-foreground hover:text-foreground inline-flex size-10 items-center justify-center rounded-md border bg-transparent whitespace-nowrap transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
};
