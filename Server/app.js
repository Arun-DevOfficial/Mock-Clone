import express from "express";
import dbConnection from "./config/database.config.js";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser"; 
import mockRoutes from "./routes/mock.route.js";
import userRoutes from "./routes/user.route.js";
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware for CORS
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}));

// Middleware to parse cookies
app.use(cookieParser()); 

// Middleware to parse JSON bodies
app.use(express.json());

// App routes
app.use("/api/mocks", mockRoutes);
app.use("/api/auth", userRoutes);

// Start the server
app.listen(port, async () => {
  try {
    await dbConnection();
    console.log(`Server's running on http://localhost:${port}`);
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
});