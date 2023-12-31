import sequelize from "sequelize";
import { db } from "../config/sequelize.config";

const User = db.define("users", {
  id: {
    type: sequelize.UUID,
    primaryKey: true,
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
