import { Router } from "express";
import { getUser, login, signup } from "../controllers/user_controller.js";

export const userRouter = Router();

// Define routes
userRouter.post('/register', signup);

userRouter.post('/login', login);

userRouter.get('/user/:username', getUser);