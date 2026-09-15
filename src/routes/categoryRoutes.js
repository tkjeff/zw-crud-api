import express from "express";

import {
  createCategory,
  getCategories,
  updateCategory,
  deleteCategory,
} from "../controllers/categoryController.js";

import { validate } from "../middleware/validate.js";

import {
  createCategorySchema,
  updateCategorySchema,
} from "../validation/categorySchema.js";

const router = express.Router();

router.post(
  "/",
  validate(createCategorySchema),
  createCategory
);

router.get("/", getCategories);

router.patch(
  "/:id",
  validate(updateCategorySchema),
  updateCategory
);

router.delete("/:id", deleteCategory);

export default router;