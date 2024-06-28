import { Router } from "express";
import { getCategories, postCategory } from "../controllers/categoryRoute.js";

// Create a router
const categoryRouter = Router();

// Define Router
categoryRouter.get('/categories', getCategories);

categoryRouter.post('/categories', postCategory)

// Export router
export default categoryRouter;