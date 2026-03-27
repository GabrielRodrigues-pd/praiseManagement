import { getAllSongs, addSongs } from "../services/songServices.js";

export const getSongs = async (req, res) => {
  try {
    const songs = await getAllSongs();
    res.status(200).send(songs);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const createSongs = async (req, res) => {
  try {
    /* const currentSongs = getAllSongs();
    const newSongs = req.bady;
    //addSongs(currentSongs, newSongs);
    res.status(200).json({ newSongs }); */
  } catch (error) {}
};
