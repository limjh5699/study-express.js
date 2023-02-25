import { AppDataSource } from "./data-source";
import { board } from "./entity/board";
import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("<H1>hello</H1>");
});

app.listen(3001, () => {
  console.log("listening on port 3001");
});
