"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../controllers/userController");
const router = (0, express_1.Router)();
// Metrics endpoint'i
router.get("/", userController_1.getUsers); //http://localhost:8000/users
exports.default = router;
