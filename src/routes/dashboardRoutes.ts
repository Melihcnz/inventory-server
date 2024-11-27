import { Router } from "express";
import { getDashboardMetrics } from "../controllers/dashboardContoller";

const router = Router();

// Ana dashboard endpoint'i


// Metrics endpoint'i
router.get("/", getDashboardMetrics); //http://localhost:8000/dashboard/metrics

export default router;
