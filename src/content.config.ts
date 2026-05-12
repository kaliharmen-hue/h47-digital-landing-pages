import { defineCollection, z } from "astro:content";

const packages = defineCollection({
  type: "content",
  schema: z.object({
    packageName: z.string(),
    pageSlug: z.string(),
    heroImage: z.string(),
    heroImageAlt: z.string(),
    supportImages: z.array(
      z.object({
        src: z.string(),
        alt: z.string(),
        caption: z.string(),
      }),
    ),
    theme: z.enum(["presence", "growth", "authority"]),
    eyebrow: z.string(),
    title: z.string(),
    subtitle: z.string(),
    primaryCta: z.string(),
    secondaryCta: z.string(),
    trust: z.string(),
    fitTitle: z.string(),
    fitItems: z.array(z.string()),
    highlights: z.array(z.string()),
    problemHeading: z.string(),
    problemBody: z.array(z.string()),
    solutionHeading: z.string(),
    solutionBody: z.array(z.string()),
    includedHeading: z.string(),
    included: z.array(z.string()),
    audienceHeading: z.string(),
    audienceBody: z.string(),
    reasonsHeading: z.string(),
    reasons: z.array(z.string()),
    processHeading: z.string(),
    process: z.array(z.string()),
    objectionHeading: z.string(),
    objectionBody: z.string(),
    objectionLinks: z
      .array(
        z.object({
          label: z.string(),
          href: z.string(),
        }),
      )
      .optional(),
    finalHeading: z.string(),
    finalBody: z.string(),
    formHeading: z.string(),
    formFields: z.array(z.string()),
    order: z.number(),
  }),
});

export const collections = { packages };
