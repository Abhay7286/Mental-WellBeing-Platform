import express from "express";
import protectRoute from "../middleware/protectRoute.js";
import { createPost, getAllPosts, getPost } from "../controllers/post.controller.js";

const router = express.Router();

router.get("/all", protectRoute, getAllPosts);

router.get("/:id", protectRoute, getPost);

router.post("/createpost", protectRoute, createPost);


export default router;
