import express from "express";
import "dotenv/config";
import cors from "cors";
import { router } from "./routes";
import { db } from "./config/sequelize";

const port = process.env.APP_PORT || 5000;
const app = express();

app.use(express.json());
app.use(cors());
app.use(router);

app.listen(port, () => {
  db.sync()
    .then(() => console.log(`🎲 database is connected!`))
    .catch((error) => console.log(`❌ error to connect database.`, error));
  console.log(`🌎 server is running on http://localhost:${port}`);
});
