import express from "express";

import { userRoutes } from "./user.routes";
import { cardRoutes } from "./cards.routes";

const router = express.Router();

router.use("/api/users", userRoutes);
router.use("/api/cards", cardRoutes);

export { router };
