import { Router } from "express";
import {
  getSongs,
  getSongById,
  createSong,
  updateSong,
  deleteSong,
} from "../controllers/songsController.js";

const router = Router();

router.get("/", getSongs);
router.get("/:id", getSongById);
router.post("/", createSong);
router.patch("/:id", updateSong);
router.delete("/:id", deleteSong);

export default router;
