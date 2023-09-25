import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import { router } from "./routes";
import { errorHandler } from "./middlewares/error-handler.middleware";

const app = express();

app.use(express.json());
app.use(cors());
app.use(router);

app.use(errorHandler);

app.use((request: Request, response: Response, next: NextFunction) => {
  return response.status(404).json({
    error: "Not Found",
  });
});

export { app };
