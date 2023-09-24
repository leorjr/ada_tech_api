import "dotenv/config";
import { app } from "./app";
import { db } from "./config/sequelize.config";
import { appConfig } from "./config/app.config";

const { port } = appConfig;

app.listen(port, () => {
  console.log(`🌎 Server is running on http://localhost:${port}`);
});

db.sync()
  .then(() => {
    console.log(`🎲 Database is connected!`);
  })
  .catch((error) => {
    console.error(`❌ Error to connect database: ${error}`);
  });

process.on("unhandledRejection", (reason, promise) => {
  console.error(
    "❌ Unhandled Promise Rejection at:",
    promise,
    "reason:",
    reason
  );
  process.exit(1);
});

process.on("uncaughtException", (error) => {
  console.error("❌ Uncaught Exception:", error);
  process.exit(1);
});
