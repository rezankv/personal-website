import { ReactNode } from "react";

// locals
import { CopyButton } from "./components";

interface CodeBlockProps {
  title: string;
  raw: string;
  children:ReactNode
}
export const CodeBlock = ({ title, raw,children }: CodeBlockProps) => {
  return (
    <>
      <div className="text-muted-foreground flex flex-row items-center justify-between rounded-t-md border-x-[1px] border-t-[1px] border-border px-4 py-2 text-xs ">
        <div>{title}</div>
        <CopyButton text={raw} />
      </div>
      {children}
    </>
  );
};
