import express from "express";
import {
  createMock,
  getAllMocks,
  deleteMock,
  getMockById,
} from "../controllers/mock.controller.js";
import authMiddleware from "../middleware/authMiddleware.js";
import { config } from "dotenv";

const router = express.Router();
config();

// Public routes
router.get("/all", authMiddleware, getAllMocks);
router.get("/response/:id", getMockById);

// Protected routes
router.post("/new", authMiddleware, createMock);
router.delete("/delete/:id", authMiddleware, deleteMock);

export default router;
