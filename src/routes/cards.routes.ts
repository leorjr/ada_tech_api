import express, { Request, Response, NextFunction } from "express";
import { validateToken } from "../middlewares/validate-token.middleware";
import { CardController } from "../controllers/card.controller";
import { loggerMiddleware } from "../middlewares/log-handler.middleware";

const cardRoutes = express.Router();

cardRoutes.get(
  "/",
  validateToken,
  (request: Request, response: Response, next: NextFunction) =>
    CardController.listAll(request, response, next)
);

cardRoutes.post(
  "/",
  validateToken,
  (request: Request, response: Response, next: NextFunction) =>
    CardController.create(request, response, next)
);

cardRoutes.put(
  "/:id",
  validateToken,
  loggerMiddleware,
  (request: Request, response: Response, next: NextFunction) =>
    CardController.update(request, response, next)
);

cardRoutes.delete(
  "/:id",
  validateToken,
  loggerMiddleware,
  (request: Request, response: Response, next: NextFunction) =>
    CardController.delete(request, response, next)
);

export { cardRoutes };
