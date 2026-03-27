import fs from "fs";
const pathSongs = "songs.json";

export function getAllSongs() {
  return JSON.parse(fs.readFileSync(pathSongs));
}

export function addSongs(currentSongs, newSongs) {
  JSON.stringify(fs.writeFileSync(pathSongs), [...currentSongs, newSongs]);
  return newSongs;
}
