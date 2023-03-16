import { Express, Request, Response } from "express";
import { comparePassword, hashingPassword } from "./bycrypt";
import knex from "./database";
import { createAccessToken, createRefreshToken, verifyToken } from "./jwt";

const routes = (app: Express) => {
  // 회원가입 라우터
  app.post("/api/register", (req: Request, res: Response) => {
    let prop: any = [];

    knex("jwt")
      .select("id")
      .where("email", req.body.email)
      .then((data) => {
        if (data[0] != undefined) {
          prop = data[0].id;
        } else {
          prop = undefined;
        }
      })
      .then(async () => {
        if (prop == undefined) {
          const password = await hashingPassword(req.body.password);
          knex("jwt")
            .insert([
              {
                email: req.body.email,
                password: password,
              },
            ])
            .then(() => {
              res.status(201).send({ message: "가입했습니다" });
            });
        } else {
          res.status(401).send({ message: "중복된 사용자 입니다" });
        }
      });
  });

  // 로그인 라우터
  app.post("/api/login", (req: Request, res: Response) => {
    knex("jwt")
      .select("password")
      .where("email", req.body.email)
      .then(async (data) => {
        if (await comparePassword(req.body.password, data[0].password)) {
          const accessToken = await createAccessToken({
            type: "JWT",
            email: req.body.email,
          });

          const refreshToken = await createRefreshToken({
            type: "JWT",
            email: req.body.email,
          });

          res.status(201).send({
            code: 201,
            message: "로그인했습니다.",
            token: { accessToken: accessToken, refreshToken: refreshToken },
          });
        } else {
          res
            .status(401)
            .send({ code: 401, message: "이메일 혹은 패스워드가 틀렸습니다." });
        }
      });
  });
};

export default routes;
