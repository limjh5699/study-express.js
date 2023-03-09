import { Request, Response } from "express";

import knex from "./database";

interface User {
  id: number;
  email: string;
  password: string;
}

export const users: User[] = [
  {
    id: 1,
    email: "mail@abc.com",
    password: "maybeePassword",
  },
];

export const searchUsers = (email: string) => {
  return users.find((user) => user.email == email);
};

export const createUsers = (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = searchUsers(email);

  if (user) {
    res.status(401).send("이미 등록된 사용자 입니다.");
  }
};
