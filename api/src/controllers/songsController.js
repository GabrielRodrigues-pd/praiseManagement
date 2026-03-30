import * as songService from "../services/songServices.js";

export const getSongs = async (req, res) => {
  try {
    const songs = await songService.getAllSongs();
    res.status(200).json({ data: songs, count: songs.length });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getSongById = async (req, res) => {
  try {
    const currentSongs = await songService.getAllSongs();
    const id = req.params.id;
    const song = songService.getSongById(currentSongs, id);
    res.status(200).json({ data: song, count: song.length });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const createSongs = async (req, res) => {
  try {
    const currentSongs = await songService.getAllSongs();
    const newSongs = req.body;
    const songs = songService.addSongs(currentSongs, newSongs);
    res.status(200).json({ data: songs, count: songs.length });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateSong = async (req, res) => {
  try {
    const currentSongs = await songService.getAllSongs();
    const updatedSong = req.body;
    const songs = songService.updateSongs(currentSongs, updatedSong);
    res.status(200).json({ data: songs, count: songs.length });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteSong = async (req, res) => {
  try {
    const currentSongs = await songService.getAllSongs();
    const id = req.params.id;
    const songs = songService.deleteSongs(currentSongs, id);
    res.status(200).json({ data: songs, count: songs.length });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
