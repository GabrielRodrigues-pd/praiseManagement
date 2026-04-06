import { Router } from "express";
import {
  getSongs,
  getSongById,
  createSongs,
  updateSong,
  deleteSong,
} from "../controllers/songsController.js";

const router = Router();

router.get("/", getSongs);
router.get("/:id", getSongById);
router.post("/", createSongs);
router.patch("/:id", updateSong);
router.delete("/:id", deleteSong);

export default router;
