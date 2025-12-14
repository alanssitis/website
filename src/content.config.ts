import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  // Load Markdown and MDX files in the `src/content/blog/` directory.
  loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    heroImageAlt: z
      .string()
      .optional()
      .default("Alan forgot to add an image alt, please bother him."),
  }),
});

const service = defineCollection({
  loader: glob({
    base: "./src/content/service",
    pattern: "**/*.yaml",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    orderIdx: z.number(),
    entries: z.array(
      z.object({
        title: z.string(),
        subtitle: z.string().optional(),
        titleLink: z.string().url().optional(),
      }),
    ),
  }),
});

const talks = defineCollection({
  loader: glob({
    base: "./src/content/talks",
    pattern: "**/*.yaml",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    orderIdx: z.number(),
    talks: z.array(
      z.object({
        title: z.string(),
        date: z.coerce.date(),
        cospeakers: z.array(z.string()).optional(),
        venue: z.string().optional(),
        venueLink: z.string().url().optional(),
        talkLink: z.string().url().optional(),
      }),
    ),
  }),
});

export const collections = { blog, service, talks };
