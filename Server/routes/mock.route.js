import express from "express";
import {
  createMock,
  getAllMocks,
  deleteMock,
  getMockById,
} from "../controllers/mock.controller.js";
import { jwtVerify } from "@kinde-oss/kinde-node-express";
import { config } from "dotenv";

const router = express.Router();
config();

//Kinde-Auth Middleware
const jwtVerifier = jwtVerify("https://agencymock.kinde.com", {
  audience: "",
});

// Public routes
router.get("/all", jwtVerifier, getAllMocks);
router.get("/response/:id", jwtVerifier, getMockById);

// Protected routes (require authentication)
router.post("/new", jwtVerifier, createMock);
router.delete("/delete/:id", jwtVerifier, deleteMock);

export default router;
