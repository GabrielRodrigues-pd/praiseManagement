import * as songService from "../services/songServices.js";

// Pega todos os songs do arquivo songs.json
export const getSongs = async (req, res) => {
  try {
    const songs = await songService.getAllSongs();
    res.status(200).json({ data: songs, count: songs.length });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Pega um song específico do arquivo songs.json pelo id
export const getSongById = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    if (Number.isNaN(id)) {
      return res.status(400).json({ message: "Invalid ID format" });
    }
    const song = await songService.getSongById(id);
    res.status(200).json({ data: song });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Adiciona um song no arquivo songs.json
export const createSong = async (req, res) => {
  try {
    const newSong = req.body;
    if (!newSong || typeof newSong !== "object" || Object.keys(newSong).length === 0) {
      return res.status(400).json({ message: "Song data is required" });
    }
    const song = await songService.addSong(newSong);
    res.status(201).json({ data: song });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Atualiza um song específico do arquivo songs.json pelo id
export const updateSong = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    if (Number.isNaN(id)) {
      return res.status(400).json({ message: "Invalid ID format" });
    }
    const updatedSong = req.body;
    if (!updatedSong || typeof updatedSong !== "object" || Object.keys(updatedSong).length === 0) {
      return res.status(400).json({ message: "Song data is required" });
    }
    const songs = await songService.updateSong(updatedSong, id);
    res.status(200).json({ data: songs });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Deleta um song específico do arquivo songs.json pelo id
export const deleteSong = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    if (Number.isNaN(id)) {
      return res.status(400).json({ message: "Invalid ID format" });
    }
    await songService.deleteSong(id);
    res.status(200).json({ message: "Song deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
