import { Schema, model }   from "mongoose";

const recipesSchema = new Schema ({
    name: {type: String},
    ingredients:[{type: String}]
});

export const recipeModel = model('Recipe', recipesSchema);
