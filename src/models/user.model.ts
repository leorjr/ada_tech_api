import sequelize from "sequelize";
import { db } from "../config/sequelize";

const User = db.define("users", {
  id: {
    type: sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  login: {
    type: sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: sequelize.STRING,
    allowNull: false,
  },
});

export { User };
