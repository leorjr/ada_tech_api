import sequelize from "sequelize";
import { db } from "../config/sequelize.config";

const Card = db.define("cards", {
  id: {
    type: sequelize.UUID,
    primaryKey: true,
    allowNull: false,
  },
  titulo: {
    type: sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  conteudo: {
    type: sequelize.STRING,
    allowNull: false,
  },
  lista: {
    type: sequelize.STRING,
    allowNull: false,
  },
});

export { Card };
