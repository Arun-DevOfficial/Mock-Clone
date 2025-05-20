import express from "express";
import {
  createMock,
  getAllMocks,
  deleteMock,
  getMockById,
} from "../controllers/mock.controller.js";
import { authMiddleware } from "../middleware/authmiddleware.js";

const router = express.Router();

// Public routes
router.get("/all", getAllMocks);
router.get("/response/:id", getMockById);

// Protected routes (require authentication)
router.post("/new", authMiddleware, createMock);
router.delete("/delete/:id", authMiddleware, deleteMock);

export default router;