import express from "express";

import {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} from "../controllers/productController.js";

import { validate } from "../middleware/validate.js";

import {
  createProductSchema,
  updateProductSchema,
} from "../validation/productSchema.js";

const router = express.Router();

router.post(
  "/",
  validate(createProductSchema),
  createProduct
);

router.get("/", getProducts);

router.get("/:id", getProductById);

router.patch(
  "/:id",
  validate(updateProductSchema),
  updateProduct
);

router.delete("/:id", deleteProduct);

export default router;