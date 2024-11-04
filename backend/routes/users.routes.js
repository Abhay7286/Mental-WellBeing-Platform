import express from "express";
import protectRoute from "../middleware/protectRoute.js";
import { getLoggedInUserDetails } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/",protectRoute,getLoggedInUserDetails)

export default router;