import Knex from "knex";
import env from "dotenv";
env.config();

const knex = Knex({
  client: "mysql",
  connection: {
    timezone: "UTC",
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    pool: {
      min: 0,
      max: 10,
    },
  },
});

export default knex;
