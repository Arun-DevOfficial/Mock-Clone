import express from "express";
import {
  signup,
  signin,
  forgetPassword,
  resetPassword,
} from "../controllers/user.controller.js";

const router = express.Router();

//Public routes
router.post("/signup", signup);
router.post("/signin", signin);
router.post("/forget-password", forgetPassword);
router.post("/reset-password", resetPassword);

export default router;
