import { recipeModel } from "../models/recipe.js";


export const getRecipes = async (req, res, next) => {
    try {
        // Get query params
        const { limit, skip, search } = req.query;
        //    Get all recipes fron Database
    const allRecipes = await recipeModel
    .find({name:search})
    .limit(limit)
    .skip(skip);
        // return all recipes as response
        res.json(allRecipes);
    } catch (error) {
       next(error) 
    }
}
   

export const addRecipes = async (req, res, next) => {
    try {
        // add recipe to database
        const newRecipe = await recipeModel.create(req.body)
        // retuern response
        res.json(newRecipe);
    } catch (error) {
        next(error);
    }
};

//  patch recipe
export const updateRecipe = async (req, res, next) => {
    try {
        // update Recipe by Id
        const updatedRecipe = await recipeModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        // Return response
        res.json(updatedRecipe);
    } catch (error) {
        next(error)
    }
}

// delete recipe
export const deleteRecipe = async (req, res) => {
    try {
        // delete recipe
        const deletedRecipe = await recipeModel.findByIdAndDelete(req.params.id);
        res.json(deletedRecipe);
    } catch (error) {
        next(error)
    }
}

// get recipe
export const getRecipeByID = (req, res) => {
    res.json(`recipe with id ${req.params.id} selected`);
}