import Image from "next/image";

export const Avatar = () => {
  return (
    <div className="group flex items-center gap-4">
      <Image
        width={25}
        height={25}
        src="/avatar.png"
        alt="Reza Nikravesh"
        className="h-12 w-12 rounded-full transition-transform duration-200 group-hover:scale-105 group-active:scale-95"
      />
      <div className="flex flex-col">
        <p className="font-medium">Reza Nikravesh</p>
        <p className="text-muted-foreground hidden font-light sm:block">
          Software Developer
        </p>
      </div>
    </div>
  );
};
