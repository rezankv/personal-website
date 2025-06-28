import { HTMLAttributes, ReactNode } from "react";

// utils
import { cn } from "@app/utils";

interface TimelineProps extends HTMLAttributes<HTMLUListElement> {
  items: { title: ReactNode; description: ReactNode; date: string }[];
}
export const Timeline = ({ items, className, ...props }: TimelineProps) => {
  return (
    <ul
      className={cn(
        "border-border relative border-s [&>*:last-child]:mb-0",
        className,
      )}
      {...props}
    >
      {items.map((item, index) => (
        <li className="ms-4 mb-10" key={`${item.title?.toString()}-${index}`}>
          <div className="border-background bg-border absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border"></div>
          <time className="text-muted-foreground-2 mb-1 text-sm leading-none font-normal">
            {item.date}
          </time>
          <span className="text-foreground block font-semibold rtl:font-medium">
            {item.title}
          </span>
          <div className="text-muted-foreground mb-4 text-sm font-normal">
            {item.description}
          </div>
        </li>
      ))}
    </ul>
  );
};
