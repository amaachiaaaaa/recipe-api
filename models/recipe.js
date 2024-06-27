import { Schema, model }   from "mongoose";

const recipesSchema = new Schema ({
    name: {type: String, unique:true, required:true},
    ingredients:[{type: String}]
});

export const recipeModel = model('Recipe', recipesSchema);
