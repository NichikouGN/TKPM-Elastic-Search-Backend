import knex from "knex";
import "dotenv/config";

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE URL does not exist");
}

export const db = knex({
  client: "pg",
  connection: process.env.DATABASE_URL,
  pool: {
    min: 0,
    max: 10,
  },
});
