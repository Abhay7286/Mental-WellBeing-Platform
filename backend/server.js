import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import postRoutes from "./routes/post.routes.js";
import usersRoutes from "./routes/users.routes.js";
import connectToMongoDb from "./db/connectToMongoDb.js";

const app = express();

dotenv.config();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser()); // to parse the incoming cookies from req.cookie

app.use("/api/auth", authRoutes)
app.use("/api/post", postRoutes )
app.use("/api/user", usersRoutes)

app.listen(PORT, () => {
  connectToMongoDb()
  console.log(`Server Running on port ${PORT}`)
})