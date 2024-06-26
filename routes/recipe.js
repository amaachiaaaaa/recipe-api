import { Router } from "express";
import { recipeModel } from "../models/recipe.js";

// create Router
const recipeRouter = Router();

// Define routes
recipeRouter.get('/recipes', (req, res) => {
    res.json('All recipes')
})

recipeRouter.post('/recipes', async (req, res) => {
    // add recipe to database
    await recipeModel.create(req.body)
    // retuern response
    res.json('recipe added')
});

recipeRouter.patch('/recipes/:id', (req, res) => {
    res.json(`recipe with id ${req.params.id} updated`);
});

recipeRouter.delete('/recipes/:id', (req, res) => {
    res.json(`recipe with id ${req.params.id} deleted`);
});

recipeRouter.get('/recipes/:id', (req, res) => {
    res.json(`recipe with id ${req.params.id} selected`);
});

// Export router
export default recipeRouter;