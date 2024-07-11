import { userModel } from "../models/usermodel.js";
import bcrypt from "bcrypt";

export const register = async(req, res, next) => {

    try {
        // Hash user password
        const hashedPassword = bcrypt.hashSync(req.body.password, 10);
        // create a new user
        const registeredUser = await userModel.create({
            ...req.body,
            password:hashedPassword
        });
        // return response
        res.status(201).json("User successfully registered");
    } catch (error) {
        
    }
};

const login = async() => {};

const logout = async() => {};

const profile = async() => {};
