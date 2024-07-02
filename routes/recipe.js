import { Router } from "express";
import { localupload } from "../middlewares/uploads.js";
import { addRecipes, deleteRecipe, getRecipeByID, getRecipes, updateRecipe } from "../controllers/recipeController.js";


// create Router
const recipeRouter = Router();

// Define routes
recipeRouter.get('/recipes', getRecipes);

recipeRouter.post('/recipes',localupload.single('image') ,addRecipes);

recipeRouter.patch('/recipes/:id', updateRecipe);

recipeRouter.delete('/recipes/:id', deleteRecipe);

recipeRouter.get('/recipe/:id', getRecipeByID);

// Export router
export default recipeRouter;