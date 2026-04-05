import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const blogCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/blog' }),
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

const adsCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.json', base: './src/content/ads' }),
  schema: z.object({
    id: z.string().optional(),
    title: z.string(),
    description: z.string(),
    image: z.string().optional(),
    ctaText: z.string(),
    link: z.string().optional(),
    priority: z.number().default(0),
    type: z.enum(['toronto', 'gary-banner', 'ktel']).default('toronto'),
    badgeText: z.string().optional(),
    phoneText: z.string().optional(),
    finePrint: z.string().optional(),
  }),
});

export const collections = {
  'blog': blogCollection,
  'gear': gearCollection,
  'ads': adsCollection,
};
