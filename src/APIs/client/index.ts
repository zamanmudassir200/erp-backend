import express from "express";
import {
  createClient,
  loginClientController,
  resetPassword,
  updatePassword,
} from "./controllers/clientControllers";

const router = express.Router();

// Register route
router.route("/register").post(createClient);

// Login route
router.route("/login").post(loginClientController); // Login with username

// Password reset routes
router.route("/reset-password").post(resetPassword);
router.route("/update-password").post(updatePassword);

export default router;
