import { z } from "zod";

export const createProductSchema = z.object({
  name: z
    .string()
    .min(2, "Product name must be at least 2 characters"),

  description: z
    .string()
    .optional(),

  price: z
    .number()
    .positive("Price must be greater than 0"),

  quantity: z
    .number()
    .int("Quantity must be a whole number")
    .nonnegative("Quantity cannot be negative"),

  categoryId: z
    .number()
    .int("Category ID must be a whole number")
    .positive("Category ID must be greater than 0"),
});

export const updateProductSchema = z.object({
  name: z
    .string()
    .min(2, "Product name must be at least 2 characters")
    .optional(),

  description: z
    .string()
    .optional(),

  price: z
    .number()
    .positive("Price must be greater than 0")
    .optional(),

  quantity: z
    .number()
    .int("Quantity must be a whole number")
    .nonnegative("Quantity cannot be negative")
    .optional(),

  categoryId: z
    .number()
    .int("Category ID must be a whole number")
    .positive("Category ID must be greater than 0")
    .optional(),
});