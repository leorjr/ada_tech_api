import { Sequelize } from "sequelize";

const URL = process.env.DATABASE_URL || "";

const db = new Sequelize({
  username: process.env.DB_USER,
  password: process.env.DB_PWD,
  database: process.env.DB_NAME,
  port: Number(process.env.DB_PORT),
  host: process.env.DB_HOST,
  dialect: "postgres",
  logging: false,
});

export { db };
