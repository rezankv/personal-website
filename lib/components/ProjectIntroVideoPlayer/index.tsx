"use client"

import { MediaHTMLAttributes } from "react";

export const ProjectIntroVideoPlayer = ({
  muted = true,
  playsInline = true,
  loop = true,
  autoPlay = true,
  controlsList = "nodownload nofullscreen noremoteplayback",
  onContextMenu = () => false,
  ...restProps
}: MediaHTMLAttributes<HTMLVideoElement>) => {
  return (
    <video
      onContextMenu={onContextMenu}
      controlsList={controlsList}
      autoPlay={autoPlay}
      loop={loop}
      muted={muted}
      playsInline={playsInline}
      {...restProps}
    ></video>
  );
};
