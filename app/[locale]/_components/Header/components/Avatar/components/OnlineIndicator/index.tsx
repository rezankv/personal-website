export const OnlineIndicator = () => {
  return (
    <span className="absolute right-[0px] bottom-[0px] flex h-[11px] w-[11px]">
      <span
        className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"
        style={{ animationDuration: "2000ms" }}
      ></span>
      <span className="relative inline-flex h-[11px] w-[11px] rounded-full bg-green-400"></span>
    </span>
  );
};
