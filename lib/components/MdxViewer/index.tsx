"use client";

import { useMDXComponent } from "next-contentlayer/hooks";
import { useEffect, useState } from "react";

interface MdxViewerProps {
  content: string;
}
export const MdxViewer = ({ content }: MdxViewerProps) => {
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    setIsShow(true);
  }, []);

  const MdxContent = useMDXComponent(content);

  return <>{isShow && <MdxContent />}</>;
};
