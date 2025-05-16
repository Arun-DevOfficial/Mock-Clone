import express from "express";
import {
  createMock,
  getAllMocks,
  deleteMock,
  getMockById,
} from "../controllers/mock.controller.js";

const router = express.Router();

//Router: /api/mocks - Create a new mock response
router.post("/new", createMock);
router.get("/all", getAllMocks);
router.delete("/delete/:id", deleteMock);
router.get("/response/:id", getMockById);

export default router;
