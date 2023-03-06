import express from "express";
import bodyParser from "body-parser";
import knex from "./database";
import cors from "cors";

const app = express();

const corsConfig = {
  origin: "http://localhost:3000",
  credentials: true,
};

app.use(express.json());
app.use(cors(corsConfig));
app.use(express.urlencoded({ extended: false }));

app.get("/api/posts", (req, res) => {
  knex("board")
    .select("no", "title", "nickname")
    .then((data) => res.send(data));
});

app.get("/api/postsAll", (req, res) => {
  knex("board")
    .select("*")
    .then((data) => res.send(data));
});

app.get("/api/posts/:id", (req, res) => {
  const id = req.params.id;

  knex("board")
    .select("title", "detail", "nickname")
    .where("no", id)
    .then((data) => res.send(data));
});

app.post("/api/create", (req, res) => {
  knex("board")
    .insert([
      {
        title: req.body.title,
        detail: req.body.detail,
        nickname: req.body.nickname,
        password: req.body.password,
      },
    ])
    .then(() => res.status(200).send({ message: "success" }));
});

app.post("/api/checkPassword", (req, res) => {
  knex("board")
    .select("password")
    .where("no", req.body.id)
    .then((data: any) => {
      if (data[0].password === req.body.password) {
        res.status(200).send({ message: "success" });
      } else {
        res.status(500).send({ message: "failed" });
      }
    });
});

app.patch("/api/posts/:id", (req, res) => {
  const id = req.params.id;

  knex("board")
    .update({
      title: req.body.title,
      detail: req.body.detail,
      nickname: req.body.nickname,
    })
    .where("no", req.body.id)
    .then(() => res.status(200).send({ message: "success" }));
});

app.delete("/api/posts/:id", (req, res) => {
  const id = req.params.id;

  knex("board")
    .del()
    .where("no", id)
    .then(() => res.status(200).send({ message: "success" }));
});

app.listen(3001, () => {
  console.log("listening on port 3001");
});
