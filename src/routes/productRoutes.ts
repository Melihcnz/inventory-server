import { Router } from "express";
import { getProducts, createProduct } from "../controllers/ProductController";

const router = Router();


// Metrics endpoint'i
router.get("/", getProducts); //http://localhost:8000/dashboard/metrics
router.post("/", createProduct); //http://localhost:8000/dashboard/metrics
export default router;