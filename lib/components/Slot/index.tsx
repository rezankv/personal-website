import { cloneElement, isValidElement, ReactNode } from "react";

interface SlotProps {
  children: ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

export const Slot = ({ children, ...props }: SlotProps) => {
  if (!isValidElement(children)) {
    throw new Error("Slot expects a single valid React element as child.");
  }

  return cloneElement(children, {
    ...props,
    ...(children.props as object),
  });
};
