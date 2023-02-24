// src/database.ts

import { createConnection, ConnectionOptions } from "typeorm";
import { User } from "./entities/User";

async function connect(): Promise<void> {
  const connectionOptions: ConnectionOptions = {
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "password",
    database: "mydatabase",
    entities: [User],
    synchronize: true,
  };

  try {
    const connection = await createConnection(connectionOptions);
    console.log("Database connected");
    // ... 데이터베이스 작업을 수행합니다.
    await connection.close();
  } catch (error) {
    console.log(error);
  }
}

connect();

// 이제 src/entities 디렉토리에 User 엔티티를 생성합니다.
// src/entities/User.ts

import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;
}

// 다음으로, src/routes 디렉토리에 user.ts 파일을 생성하여 라우터를 설정합니다.
// src/routes/user.ts

import { Router } from "express";
import { getRepository } from "typeorm";
import { User } from "../entities/User";

const router = Router();

router.get("/", async (req, res) => {
  const userRepository = getRepository(User);
  const users = await userRepository.find();
  res.json(users);
});

router.post("/", async (req, res) => {
  const userRepository = getRepository(User);
  const { name, email, password } = req.body;
  const user = new User();
  user.name = name;
  user.email = email;
  user.password = password;
  const result = await userRepository.save(user);
  res.json(result);
});

router.put("/:id", async (req, res) => {
  const userRepository = getRepository(User);
  const id = parseInt(req.params.id, 10);
  const { name, email, password } = req.body;
  const user = await userRepository.findOne(id);
  if (!user) {
    res.sendStatus(404);
    return;
  }
  user.name = name;
  user.email = email;
  user.password = password;
  const result = await userRepository.save(user);
  res.json(result);
});

router.delete("/:id", async (req, res) => {
  const userRepository = getRepository(User);
  const id = parseInt(req.params.id, 10);
  const result = await userRepository.delete(id);
  res.json(result);
});

export default router;

// 마지막으로, src/app.ts 파일에서 Express 애플리케이션을 설정합니다.
// src/app.ts

import express from "express";
import { json } from "body-parser";
import userRouter from "./routes/user";
import "./database";

const app = express();
app.use(json());
app.use("/users", userRouter);

export default app;

이제 애플리케이션을 실행하면 CRUD API가 작동합니다.
// index.ts

import app from "./app";

const port = 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));