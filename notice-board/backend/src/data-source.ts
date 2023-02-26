import "reflect-metadata";
import { DataSource } from "typeorm";
import { Post } from "./entity/board";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "1234",
  database: "practice",
  synchronize: true,
  logging: false,
  entities: [Post],
  migrations: [],
  subscribers: [],
});
