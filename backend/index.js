import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./routes/user.route.js";
const app = express();
dotenv.config();
app.use(express.json());
const PORT = process.env.PORT || 5000;
const MONGO_DB_URL = process.env.MONGO_DB_URL;
mongoose.connect(MONGO_DB_URL).then(() => console.log("connected"));
app.use(cors());
app.use("/", userRoute);
app.listen(PORT, () => {
  console.log("listen");
});
