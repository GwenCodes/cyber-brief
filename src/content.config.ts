import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const briefs = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/briefs" }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    description: z.string(),
    date: z.string(),
    tag: z.string(),
    image: z.string().optional(),
    bluf: z.string(),
  }),
});

export const collections = { briefs };
