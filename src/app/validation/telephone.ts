import { z } from "zod";

export const validateTelephone = z
  .string()
  .min(10, { message: "Telephone must be at least 10 digits long" });
