import { AppDataSource } from "./data-source";
import { Post } from "./entity/board";
import express from "express";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/api/posts", async (req, res) => {
  console.log(AppDataSource.getRepository(Post));
  const postRepo = await AppDataSource.getRepository(Post);

  await postRepo
    .find()
    .then((data) => res.json(data))
    .catch((err) => console.log(err));
});

app.get("/api/posts/:no", async (req, res) => {
  const no = parseInt(req.params.no);
  const postRepo = AppDataSource.getRepository(Post);

  await postRepo
    .findOne({ where: { no: no } })
    .then((data) => res.json(data))
    .catch((err) => console.log(err));
});

app.post("/api/create", async (req, res) => {
  const info = {
    title: req.body.title,
    detail: req.body.detail,
    nickname: req.body.nickname,
    password: req.body.password,
  };

  console.log(req.body);
  const postRepo = AppDataSource.getRepository(Post);
  const post = postRepo.create(info);

  await postRepo
    .save(post)
    .then((data) => res.json(data))
    .catch((err) => console.log(err));
});

app.patch("/api/posts/:id", (req, res) => {
  res.send("<H1>hello</H1>");
});

app.delete("/api/posts/:id", (req, res) => {
  res.send("<H1>hello</H1>");
});

app.listen(3001, () => {
  console.log("listening on port 3001");
});
