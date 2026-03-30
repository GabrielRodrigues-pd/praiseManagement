import { Router } from "express";
import {
  getSongs,
  createSongs,
  updateSong,
  deleteSong,
} from "../controllers/songsController.js";

const router = Router();

router.get("/", getSongs);
router.post("/", createSongs);
router.put("/:id", updateSong);
router.delete("/:id", deleteSong);

export default router;
