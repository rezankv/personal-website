"use client";

import { useMDXComponent } from "next-contentlayer/hooks";
import { useEffect, useState } from "react";

// i18n
import { Link } from "@app/i18n/navigation";

// locals
import { CodeBlock } from "..";

interface MdxViewerProps {
  content: string;
}
export const MdxViewer = ({ content }: MdxViewerProps) => {
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    setIsShow(true);
  }, []);

  const MdxContent = useMDXComponent(content);

  return <>{isShow && <MdxContent components={{ CodeBlock, Link }} />}</>;
};
