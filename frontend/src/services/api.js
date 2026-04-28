import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/songs",
  headers: {
    "Content-Type": "application/json",
  },
});

const getSongs = async () => {
  const response = await api.get("/");

  return response.data?.data || [];
};

const createSong = async (song) => {
  const response = await api.post("/", song);

  return response.data?.data || [];
};

const updateSong = async (id, song) => {
  const response = await api.patch(`/${id}`, song);

  return response.data?.data || [];
};

const deleteSong = async (id) => {
  const response = await api.delete(`/${id}`);

  return response.data?.message || "Song deleted";
};

export { getSongs, createSong, updateSong, deleteSong };
