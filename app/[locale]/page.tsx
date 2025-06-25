
// locals
import {
  AboutSection,
  ExperienceSection,
  PostsSection,
  ProjectSection,
} from "./_components";


export default function Home() {
  return (
    <div className="animate-fade-in mx-4 mt-4 flex flex-col gap-10">
      <AboutSection />
      <ProjectSection />
      <PostsSection />
      <ExperienceSection />
    </div>
  );
}
