import express, { Request, Response, NextFunction } from "express";
import { validateToken } from "../middlewares/validate-token.middleware";
import { CardController } from "../controllers/card.controller";

const cardRoutes = express.Router();

cardRoutes.get(
  "/",
  validateToken,
  (request: Request, response: Response, next: NextFunction) =>
    CardController.listAll(request, response, next)
);

export { cardRoutes };
