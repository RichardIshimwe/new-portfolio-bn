import express from "express";
import controller from "../controllers/User";

const router = express.Router();

router.post("/create/user", controller.createUser);

export default router;
