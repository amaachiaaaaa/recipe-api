import { Router } from "express";
import { login, profile, register } from "../controllers/auth.js";
import { checkUserSession } from "../middlewares/auth.js";

const userRouter = Router();

// define routes
userRouter.post("/register", register);

userRouter.post('/login', login);

userRouter.get('/profile', checkUserSession, profile);

// export user router
export default userRouter; /* export default cannot be done more than once in a .js file*/