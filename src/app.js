import express from "express";
import cors from "cors";
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "ZW CRUD API is running",
  });
});

app.use("/api/categories", categoryRoutes);
app.use("/api/products", productRoutes);

export default app;