import fs from "fs";
const pathSongs = "songs.json";

export function getAllSongs() {
  return JSON.parse(fs.readFileSync(pathSongs));
}

export function addSongs(currentSongs, newSongs) {
  const songs = [...currentSongs, newSongs];
  fs.writeFileSync(pathSongs, JSON.stringify(songs));
  return songs;
}

export function getSongById(currentSongs, id) {
  if (typeof id !== "number") {
    throw new Error("Id must be a number");
  }
  const song = currentSongs.find((song) => song.id === id);
  if (!song) {
    throw new Error("Song not found");
  }
  return song;
}

export function updateSongs(currentSongs, updatedSong, id) {
  const indexModificado = currentSongs.findIndex((song) => song.id === id);
  const conteudoMudado = { ...currentSongs[indexModificado], ...updatedSong };
  currentSongs[indexModificado] = conteudoMudado;
  fs.writeFileSync(pathSongs, JSON.stringify(currentSongs));
  return currentSongs;
}

export function deleteSongs(currentSongs, id) {
  const songs = currentSongs.filter((song) => song.id !== id);
  fs.writeFileSync(pathSongs, JSON.stringify(songs));
  return songs;
}
