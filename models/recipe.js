import { Schema, model, Types }   from "mongoose";
import normalize from "normalize-mongoose";

const recipesSchema = new Schema ({
    name: {type: String, unique:true, required:true},
    categoryid:{ type:Types.ObjectId, ref:'category',required:true},
    description:{ type: String,required:true},
    ingredient:[{type:String,required:true},],
    image:{type:String},
    favourite:{type:Boolean, default:false}
}, {
    timestamps:true
})

recipesSchema.plugin(normalize);

export const recipeModel = model('Recipe', recipesSchema);
