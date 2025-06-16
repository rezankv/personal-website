import { HTMLAttributes } from "react";

// utils
import { cn } from "@app/utils";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface SpinnerProps extends HTMLAttributes<HTMLDivElement> {}
export const Spinner = ({ className, ...props }: SpinnerProps) => {
  return (
    <div
      className={cn(
        "h-6 w-6  rounded-full border-2 border-t-2 border-transparent animate-[spin_300ms_linear_infinite]",
        "border-t-foreground",
        className,
      )}

      {...props}
    ></div>
  );
};
