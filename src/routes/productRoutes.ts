import { Router } from "express";
import { getProducts, createProduct } from "../controllers/ProductController";

const router = Router();


// Metrics endpoint'i
router.get("/", getProducts); //http://localhost:8000/products
router.post("/", createProduct); //http://localhost:8000/products
export default router;