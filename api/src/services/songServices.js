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

export function updateSongs(currentSongs, updatedSong) {
  const songs = currentSongs.map((song) =>
    song.id === updatedSong.id ? updatedSong : song,
  );
  fs.writeFileSync(pathSongs, JSON.stringify(songs));
  return songs;
}

export function deleteSongs(currentSongs, id) {
  const songs = currentSongs.filter((song) => song.id !== id);
  fs.writeFileSync(pathSongs, JSON.stringify(songs));
  return songs;
}
