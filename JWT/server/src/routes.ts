import { Express, Request, Response } from "express";

const routes = (app: Express) => {
  app.post("/login", (req: Request, res: Response) => {
    res.send("테스트");
  });
};

export default routes;
