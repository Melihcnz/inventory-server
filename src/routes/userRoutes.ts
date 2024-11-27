import { Router } from "express";
import { getUsers } from "../controllers/userController";

const router = Router();


// Metrics endpoint'i
router.get("/", getUsers); //http://localhost:8000/users

export default router;