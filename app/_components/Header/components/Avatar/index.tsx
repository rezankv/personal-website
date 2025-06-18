import Image from "next/image";

// locals
// import { OnlineIndicator } from "./components";

export const Avatar = () => {
  return (
    <div className="group flex items-center gap-3 sm:gap-4">
      <div className="relative">
        <Image
          width={48}
          height={48}
          src="/avatar.webp"
          alt="Reza Nikravesh"
          className="rounded-full transition-transform duration-200 group-hover:scale-105 group-active:scale-95"
          unoptimized
        />
        {/* <OnlineIndicator /> */}
      </div>
      <div className="flex flex-col">
        <p className="font-medium">
          Reza Nikravesh<span className="hidden sm:inline"></span>
        </p>
        <p className="text-muted-foreground hidden font-light sm:block">
          Software Developer
        </p>
      </div>
    </div>
  );
};
