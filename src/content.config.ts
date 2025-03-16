import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const postSchema = z.object({
  title: z.string(),
  published: z.date(),
  draft: z.boolean().optional(),
  description: z.string().optional(),
  image: z.string().optional(),
  tags: z.array(z.string()).optional(),
  category: z.string().optional(),

  // defined in src/utils/content-utils.ts
  nextSlug: z.string().optional(),
  nextTitle: z.string().optional(),
  prevSlug: z.string().optional(),
  prevTitle: z.string().optional(),
});

const postsCollection = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/posts" }),
  schema: postSchema,
});

const specPageCollection = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/spec" }),
  schema: postSchema,
});

export const collections = {
  posts: postsCollection,
  spec: specPageCollection,
};
