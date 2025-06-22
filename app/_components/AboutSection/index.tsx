// locals
import { SocialLinks } from "./components";

export const AboutSection = () => {
  return (
    <div className=" flex flex-col gap-2">
      <span className="font-medium">About me</span>
      <p>
        {`Hi, I'm Reza. I'm based in Los Angeles, California. In addition to
          coding, I also make YouTube videos, sharing my knowledge and
          experience on web & mobile development.`}
      </p>
      <SocialLinks />
    </div>
  );
};
