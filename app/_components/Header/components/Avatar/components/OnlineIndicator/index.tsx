export const OnlineIndicator = () => {
  return (
    <span className="absolute right-[0px] bottom-[0px] flex h-[11px] w-[11px]">
      <span className="bg-green-400 absolute inline-flex h-full w-full animate-ping rounded-full opacity-75" style={{ animationDuration:"2000ms" }}></span>
      <span className="bg-green-400 relative inline-flex h-[11px] w-[11px] rounded-full"></span>
    </span>
  );
};
