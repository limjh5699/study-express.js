import { Express, Request, Response } from "express";
import { hashingPassword } from "./hasing";
import knex from "./database";

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
};

export default routes;
