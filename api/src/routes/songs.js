import { Router } from "express";
import { getSongs, createSongs } from "../controllers/songsController.js";

const router = Router();

router.get("/", getSongs);
router.post("/", createSongs);

export default router;
