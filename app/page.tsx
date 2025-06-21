// locals
import { AboutSection, PostsSection, ProjectSection } from "./_components";

export default function Home() {
  return (
    <div className="animate-fade-in mt-4 flex flex-col gap-10">
      <AboutSection />
      <ProjectSection />
      <PostsSection />
    </div>
  );
}
