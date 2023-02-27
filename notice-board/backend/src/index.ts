import express from "express";
import bodyParser from "body-parser";
import knex from "./database";

const app = express();

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
    .then(() => res.send("success"));
});

app.patch("/api/posts/:id", (req, res) => {
  const id = req.params.id;

  knex("board")
    .update({ detail: req.body.detail })
    .where("no", id)
    .then(() => res.send("success"));
});

app.delete("/api/posts/:id", (req, res) => {
  const id = req.params.id;

  knex("board")
    .del()
    .where("no", id)
    .then(() => res.send("success"));
});

app.listen(3001, () => {
  console.log("listening on port 3001");
});
