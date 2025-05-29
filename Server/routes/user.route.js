import express from "express";
import {
  signup,
  signin,
  forgetPassword,
  resetPassword,
  logout,
} from "../controllers/user.controller.js";

const router = express.Router();

//Public routes
router.post("/signup", signup);
router.post("/signin", signin);
router.post("/forget-password", forgetPassword);
router.post("/reset-password", resetPassword);
router.post("/logout", logout);
export default router;
