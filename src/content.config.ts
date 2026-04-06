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

const acquisitionsCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/acquisitions' }),
  schema: z.object({
    item_name: z.string(),
    category: z.string(),
    era: z.string(),
    short_description: z.string(),
    technical_details: z.string(),
    condition: z.string(),
    humorous_defect: z.string(),
    gary_defect_spin: z.string(),
    provenance: z.string(),
    gary_remarks: z.string(),
    price_or_offer_label: z.string().default('Make an Offer'),
    badges: z.array(z.string()).optional(),
    primary_image: z.string().optional(),
    secondary_image: z.string().optional(),
  }),
});

export const collections = {
  'blog': blogCollection,
  'gear': gearCollection,
  'ads': adsCollection,
  'acquisitions': acquisitionsCollection,
};
