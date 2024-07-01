import { Schema, model, Types }   from "mongoose";
import { toJSON } from "@reis/mongoose-to-json";

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

recipesSchema.plugin(toJSON);

export const recipeModel = model('Recipe', recipesSchema);
