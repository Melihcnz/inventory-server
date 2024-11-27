"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ProductController_1 = require("../controllers/ProductController");
const router = (0, express_1.Router)();
// Metrics endpoint'i
router.get("/", ProductController_1.getProducts); //http://localhost:8000/dashboard/metrics
router.post("/", ProductController_1.createProduct); //http://localhost:8000/dashboard/metrics
exports.default = router;
