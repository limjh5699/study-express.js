import Knex from "knex";

const knex = Knex({
  client: "mysql",
  connection: {
    timezone: "UTC",
    host: "localhost",
    port: 3306,
    user: "root",
    password: "1234",
    database: "practice",
    pool: {
      min: 0,
      max: 10,
    },
  },
});

export default knex;
