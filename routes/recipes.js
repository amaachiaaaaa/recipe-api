import { Router } from "express";

// create Router
const recipeRouter = Router();

// Define routes
recipeRouter.get('/recipes', (req, res) => {
    res.json('All recipes')
})

recipeRouter.post('/recipes', (rep, res) => {
    res.json('Add recipes');
});

recipeRouter.patch('/recipes/:id', (req, res) => {
    res.json(`recipe with id ${req.params.id} updated`);
});

recipeRouter.delete('/recipes/:id', (req, res) => {
    res.json(`recipe with id ${req.params.id} deleted`);
});
// Export router
export default recipeRouter;