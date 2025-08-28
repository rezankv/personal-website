"use client";

import { MediaHTMLAttributes } from "react";

export const ProjectIntroVideoPlayer = ({
  muted = true,
  playsInline = true,
  loop = true,
  autoPlay = true,
  controlsList = "nodownload nofullscreen noremoteplayback",
  onContextMenu = () => false,
  src,
  ...restProps
}: MediaHTMLAttributes<HTMLVideoElement>) => {
  return src ? (
    <video
      onContextMenu={onContextMenu}
      controlsList={controlsList}
      autoPlay={autoPlay}
      loop={loop}
      muted={muted}
      playsInline={playsInline}
      src={src}
      {...restProps}
    ></video>
  ) : null;
};
