import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const blogCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    publishDate: z.coerce.date().optional(),
    author: z.string().default('Gary'),
    image: z.string().optional(),
  }),
});

const gearCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/gear' }),
  schema: z.object({
    title: z.string(),
    condition: z.string(),
    price: z.number().optional(),
    isGarySpecial: z.boolean().default(false),
    image: z.string().optional(),
  }),
});

export const collections = {
  'blog': blogCollection,
  'gear': gearCollection,
};
