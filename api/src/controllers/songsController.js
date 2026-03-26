import { getAllSongs } from "../services/songServices.js";

export const getSongs = async (req, res) => {
  try {
    const songs = getAllSongs();
    res.status(200).send(songs);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
