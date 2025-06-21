import { Post } from "@app/.contentlayer/generated";

export const sortPostsByDate = (
  posts: Post[],
  order: "asc" | "desc" = "desc",
): Post[] => {
  return [...posts].sort((a, b) => {
    const d1 = new Date(a.date).getTime();
    const d2 = new Date(b.date).getTime();
    return order === "asc" ? d1 - d2 : d2 - d1;
  });
};
