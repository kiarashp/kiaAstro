import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projectCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/projects" }),
  schema: ({ image }) => 
    z.object({
    title: z.string(),
    publishDate: z.date(),
    desc: z.string(),
    short: z.string(),
    imageUrl: image().optional(),
    tags: z.array(z.string()),
    github:z.string().optional().nullable(),
    demo:z.string().optional().nullable(),
    featured:z.boolean()
  }),
});

export const collections = {
  projects: projectCollection,
};
