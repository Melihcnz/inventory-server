import { Router } from "express";
import { getDashboardMetrics } from "../controllers/dashboardController";

const router = Router();


// Metrics endpoint'i
router.get("/", getDashboardMetrics); //http://localhost:8000/dashboard/metrics

export default router;
