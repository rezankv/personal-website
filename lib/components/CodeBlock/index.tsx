import { ReactNode } from "react";

// locals
import { CopyButton } from "./components";

interface CodeBlockProps {
  title: string;
  raw: string;
  children: ReactNode;
}
export const CodeBlock = ({ title, raw, children }: CodeBlockProps) => {
  return (
    <div dir="ltr">
      <div className="text-muted-foreground border-border flex flex-row items-center justify-between rounded-t-md border-x-[1px] border-t-[1px] px-4 py-2 text-xs">
        <div>{title}</div>
        <CopyButton text={raw} />
      </div>
      {children}
    </div>
  );
};
