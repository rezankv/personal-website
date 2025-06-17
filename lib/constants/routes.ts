export const HOME_ROUTE = `/`;
export const PROJECTS_ROUTE = `/projects`;
export const SINGLE_PROJECT_ROUTE = (slug: string) =>
  `${PROJECTS_ROUTE}/${slug}`;
export const POSTS_ROUTE = `/posts`;
export const SINGLE_POST_ROUTE = (slug: string) => `${POSTS_ROUTE}/${slug}`;
