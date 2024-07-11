import { model, Schema } from "mongoose";
import { toJSON } from "@reis/mongoose-to-json";

const userSchema = new Schema({
    name:{type:String,required:true},
    userName:{type:String, required:true},
    email:{type:String, required:true},
    phone:{type:String, required:true},
    password:{type:String, required:true}
},{
    timestamps:true
});

userSchema.plugin(toJSON);


// export the user model
export const userModel = model('user', userSchema);