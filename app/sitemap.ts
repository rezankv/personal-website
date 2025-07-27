import type { MetadataRoute } from "next";

// i18n
import { Locale } from "@app/i18n/routing";

// constants
import { routes } from "@app/constants";

// contents
import { postService, projectService } from "@app/contents";

export default function sitemap(): MetadataRoute.Sitemap {
    const createUrl = (path: string, locale?: Locale) => {
        const BASE_URL = `${process.env.WEBSITE_URL}`;
        return `${BASE_URL}${locale ? `/${locale}` : ""}${path === "/" ? "" : path}`;
    };

    const allRoutes = [
        routes.HOME_ROUTE,
        routes.POSTS_ROUTE,
        routes.PROJECTS_ROUTE,
        ...postService.getAll().map((post) => routes.SINGLE_POST_ROUTE(post.slug)),
        ...projectService
            .getAll()
            .map((project) => routes.SINGLE_PROJECT_ROUTE(project.slug)),
    ];

    return allRoutes.map((route) => ({
        priority: 1,
        changeFrequency: "weekly",
        url: createUrl(route),
        lastModified: new Date(),
    }))
}
