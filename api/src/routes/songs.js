import { Router } from "express";
import { getSongs } from "../controllers/songsController.js";

const router = Router();

router.get("/", getSongs);

export default router;
