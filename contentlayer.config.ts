import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypePrism from "rehype-prism-plus";

// i18n
import { routing } from "./i18n/routing";


export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `posts/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: true },
    lang: { type: "enum", options: routing.locales, required: true },
    slug: { type: "string", required: true },
    summery: { type: "string", required: true },
    tags: {
      type: "list", of: {
        type: "string"
      }, required: true
    },
    keywords: {
      type: "list", of: {
        type: "string"
      }, required: true
    },
    author: { type: 'enum', options: ["Reza Nikravesh"] },


  },
  computedFields: {
    url: {
      type: "string",
      resolve: (doc) => `/${doc._raw.flattenedPath}`,
    },
  },
}));

export const Project = defineDocumentType(() => ({
  name: "Project",
  filePathPattern: `projects/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: true },
    lang: { type: "enum", options: routing.locales, required: true },
    slug: { type: "string", required: true },
    summery: { type: "string", required: true },
    tags: {
      type: "list", of: {
        type: "string"
      }, required: true
    },
    keywords: {
      type: "list", of: {
        type: "string"
      }, required: true
    },
    author: { type: 'enum', options: ["Reza Nikravesh"] },

    isFeatured: { type: "boolean", required: true },
    liveLink: { type: "string", required: true },
    icon: { type: "string", required: true },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (doc) => `/${doc._raw.flattenedPath}`,
    },
  },
}));

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Post, Project],
  mdx: {
    rehypePlugins: [[rehypePrism, { showLineNumbers: true }]],
  },
});
