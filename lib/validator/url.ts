import { z } from "zod";

export const UrlSchema = z.object({
  url: z
    .string()
    .regex(/https?:\/\/(?:www\.)?[^\s/$.?#].[^\s]*/gi, {
      message: "Invalid URL.",
    })
    .trim(),
});

export type UrlValidator = z.infer<typeof UrlSchema>;
