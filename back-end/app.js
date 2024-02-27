import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import routes from "./routes/window.js";
import Window from "./models/WindowModel.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", routes);

const PORT = process.env.PORT || 3000;

/**
 * Connect to MongoDB
 */
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    console.log("MongoDB connected");

    /**
     * Check if the database is pre-filled
     */
    const windowsCount = await Window.countDocuments();
    if (windowsCount === 0) {
      await Window.create([
        { name: "Window 1", count: 0, items: [] },
        { name: "Window 2", count: 0, items: [] },
        { name: "Window 3", count: 0, items: [] },
      ]);
      console.log("Database pre-filled with windows.");
    }

    /**
     * Start the server
     */
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => console.error("MongoDB connection error:", err));
