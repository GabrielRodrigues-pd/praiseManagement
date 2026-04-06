import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/songs",
  headers: {
    "Content-Type": "application/json",
  },
});

const getSongs = () => {
  const response = api.get("/");

  return response;
};

export { getSongs };
