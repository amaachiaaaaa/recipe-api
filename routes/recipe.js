import { Router } from "express";
import { remoteUpload } from "../middlewares/uploads.js";
import { addRecipes, deleteRecipe, getRecipeByID, getRecipes, updateRecipe } from "../controllers/recipeController.js";
import { checkUserSession } from "../middlewares/auth.js";


// create Router
const recipeRouter = Router();

// recipeRouter.use(checkUserSession);

// Define routes
recipeRouter.get('/recipes', getRecipes);

recipeRouter.post('/recipes',checkUserSession, remoteUpload.single('image') ,addRecipes);

recipeRouter.patch('/recipes/:id', updateRecipe);

recipeRouter.delete('/recipes/:id', deleteRecipe);

recipeRouter.get('/recipe/:id', getRecipeByID);

// Export router
export default recipeRouter;