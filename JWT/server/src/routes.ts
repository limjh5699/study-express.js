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
            email: req.body.email,
          });

          const refreshToken = await createRefreshToken({
            email: req.body.email,
          });

          res.cookie("email", req.body.email);
          res.cookie("accessToken", accessToken);
          res.cookie("refreshToken", refreshToken);

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

  // 토큰 확인 라우터
  app.post("/api/checkTokens", async (req: Request, res: Response) => {
    if (req.cookies.accessToken === undefined) {
      throw Error("API 사용 권한이 없습니다.");
    }

    let accessToken: any = await verifyToken(req.cookies.accessToken);
    let refreshToken: any = await verifyToken(req.cookies.refreshToken);

    if (accessToken === null) {
      if (refreshToken === null) {
        // Access Token X / Refresh Token X
        res.status(401).send({ code: 401, message: "토큰이 만료되었습니다." });
      } else {
        // Access Token X / Refresh Token O
        accessToken = await createAccessToken({
          email: req.cookies.email,
        });
        res.cookie("accessToken", accessToken);
        res
          .status(201)
          .send({ code: 201, message: "Access Token이 재발급 되었습니다." });
      }
    } else {
      if (refreshToken === null) {
        // Access Token O / Refresh Token X
        refreshToken = await createRefreshToken({
          email: req.cookies.email,
        });
        res.cookie("refreshToken", refreshToken);
        res
          .status(201)
          .send({ code: 201, message: "Refresh Token이 재발급 되었습니다." });
      } else {
        // Access Token O / Refresh Token O
        res.status(201).send({ code: 201, message: "만료된 토큰이 없습니다." });
      }
    }
  });
};

export default routes;
