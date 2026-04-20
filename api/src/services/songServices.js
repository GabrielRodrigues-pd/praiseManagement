import * as fs from "fs";
const pathSongs = "songs.json";

/* 

  Melhorias aplicadas:
1. Import corrigido: import * as fs from "fs" ✓
2. Função saveSongs extraída: Evita duplicação de lógica de escrita
3. JSON formatado: JSON.stringify(songs, null, 2) para legibilidade
4. Validação adicionada em todas as funções
5. ID como string ou number: Funções agora aceitam ambos os tipos
6. Mutação corrigida: criar clone com spread antes de modificar (const songs = [...currentSongs])
7. Geração automática de ID em addSongs: id: Date.now()
8. Verificação de exclusão em deleteSongs: Confere se algo foi realmente removido

*/

function saveSongs(songs) {
  fs.writeFileSync(pathSongs, JSON.stringify(songs, null, 2));
}

export function getAllSongs() {
  return JSON.parse(fs.readFileSync(pathSongs));
}

export function addSongs(currentSongs, newSongs) {
  if (!newSongs || typeof newSongs !== "object") {
    throw new Error("Invalid song data");
  }
  const songs = [...currentSongs, { ...newSongs, id: Date.now() }];
  saveSongs(songs);
  return songs;
}

export function getSongById(currentSongs, id) {
  if (typeof id !== "number" && typeof id !== "string") {
    throw new Error("Id must be a number or string");
  }
  const parsedId = typeof id === "string" ? parseInt(id) : id;
  const song = currentSongs.find((song) => song.id === parsedId);
  if (!song) {
    throw new Error("Song not found");
  }
  return song;
}

export function updateSongs(currentSongs, updatedSong, id) {
  if (!updatedSong || typeof updatedSong !== "object") {
    throw new Error("Invalid song data");
  }
  const parsedId = typeof id === "string" ? parseInt(id) : id;
  const indexModificado = currentSongs.findIndex(
    (song) => song.id === parsedId,
  );
  if (indexModificado === -1) {
    throw new Error("Song not found");
  }
  const songs = [...currentSongs];
  songs[indexModificado] = { ...songs[indexModificado], ...updatedSong };
  saveSongs(songs);
  return songs;
}

export function deleteSongs(currentSongs, id) {
  if (typeof id !== "number" && typeof id !== "string") {
    throw new Error("Id must be a number or string");
  }
  const parsedId = typeof id === "string" ? parseInt(id) : id;
  const songs = currentSongs.filter((song) => song.id !== parsedId);
  if (songs.length === currentSongs.length) {
    throw new Error("Song not found");
  }
  saveSongs(songs);
  return songs;
}
