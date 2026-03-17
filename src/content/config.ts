import { defineCollection, z } from "astro:content";

const briefs = defineCollection({
  type: "content",
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
