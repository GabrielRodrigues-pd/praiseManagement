import fs from "fs";

export function getAllSongs() {
  return JSON.parse(fs.readFileSync("songs.json"));
}
