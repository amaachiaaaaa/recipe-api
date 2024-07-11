import { register } from "../controllers/auth.js";
import { Router } from "express";

const userRouter = Router();

// define routes
userRouter.post("/register", register);


// export user router
export default userRouter; /* export default cannot be done more than once in a .js file*/