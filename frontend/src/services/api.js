import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/songs",
  headers: {
    "Content-Type": "application/json",
  },
});

const getSongs = async () => {
  const response = await api.get("/");

  return response.data;
};

export { getSongs };
