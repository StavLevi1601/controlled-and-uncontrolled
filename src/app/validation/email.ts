import { z } from "zod";

export const emailSchema = z.string().email({
  message: "Invalid email address",
});

export type EmailSchema = z.infer<typeof emailSchema>;
