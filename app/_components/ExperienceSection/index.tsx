// components
import { ShowMore, Timeline } from "@app/components";

export const ExperienceSection = () => {
  return (
    <ShowMore >
      <div className="flex flex-col gap-4 px-2">
        <span className="font-medium">Work Experiences</span>
        <Timeline
          items={[
            {
              date: "February 2022 - April 2025",
              description:
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae nostrum eligendi, laboriosam doloribus ut officiis veniam. Dolore at est dolorum! Magnam, exercitationem est beatae repellat recusandae et ipsam fuga sunt!",
              title: "Frontend Developer",
            },
            {
              date: "February 2022 - April 2025",
              description:
                "Lorem ipsum, Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae nostrum eligendi, laboriosam doloribus ut officiis veniam. Dolore at est dolorum! Magnam, exercitationem est beatae repellat recusandae et ipsam fuga sunt! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae nostrum eligendi, laboriosam doloribus ut officiis veniam. Dolore at est dolorum! Magnam, exercitationem est beatae repellat recusandae et ipsam fuga sunt! dolor sit amet consectetur adipisicing elit. Molestiae nostrum eligendi, laboriosam doloribus ut officiis veniam. Dolore at est dolorum! Magnam, exercitationem est beatae repellat recusandae et ipsam fuga sunt!",
              title: "Frontend Developer",
            },
            {
              date: "Frontend Developer (February 2022 - April 2025)",
              description:
                "Lorem ipsum, Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae nostrum eligendi, laboriosam doloribus ut officiis veniam. Dolore at est dolorum! Magnam, exercitationem est beatae repellat recusandae et ipsam fuga sunt! dolor sit amet consectetur adipisicing elit. Molestiae nostrum eligendi, laboriosam doloribus ut officiis veniam. Dolore at est dolorum! Magnam, exercitationem est beatae repellat recusandae et ipsam fuga sunt!",
              title: "Frontend Developer",
            },
          ]}
        />
      </div>
    </ShowMore>
  );
};
