import express, { Request, Response, NextFunction } from "express";
import { validateToken } from "../middlewares/validate-token.middleware";
import { CardController } from "../controllers/card.controller";
import { loggerMiddleware } from "../middlewares/log-handler.middleware";
import { SequelizeCardRepository } from "../repository/sequelize-repository/sequelize-card-repository";

const cardRoutes = express.Router();
const cardRepository = new SequelizeCardRepository();
const cardController = new CardController(cardRepository);

cardRoutes.get(
  "/",
  validateToken,
  (request: Request, response: Response, next: NextFunction) =>
    cardController.listAll(request, response, next)
);

cardRoutes.post(
  "/",
  validateToken,
  (request: Request, response: Response, next: NextFunction) =>
    cardController.create(request, response, next)
);

cardRoutes.put(
  "/:id",
  validateToken,
  loggerMiddleware,
  (request: Request, response: Response, next: NextFunction) =>
    cardController.update(request, response, next)
);

cardRoutes.delete(
  "/:id",
  validateToken,
  loggerMiddleware,
  (request: Request, response: Response, next: NextFunction) =>
    cardController.delete(request, response, next)
);

export { cardRoutes };
