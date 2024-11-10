import express from "express";
import protectRoute from "../middleware/protectRoute.js";
import { createComment } from "../controllers/reaction.controller.js";

const router = express.Router();

router.post("/createcomment",protectRoute,createComment)

export default router;