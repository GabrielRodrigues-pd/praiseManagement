import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Api Praise Manager rodando em: http://localhost:3000");
});

app.listen(PORT, () => {
  console.log(`Api Praise Manager rodando em: http://localhost:${PORT}`);
});
