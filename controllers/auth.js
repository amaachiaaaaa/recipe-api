import { userModel } from "../models/usermodel.js";
import bcrypt from "bcrypt";

export const register = async (req, res, next) => {

    try {
        // Hash user password
        const hashedPassword = bcrypt.hashSync(req.body.password, 10);
        // create a new user
        const registeredUser = await userModel.create({
            ...req.body,
            password: hashedPassword
        });
        // return response
        res.status(201).json("User successfully registered");
    } catch (error) {
        next(error)
    }
};

export const login = async (req, res, next) => {
    const { email, password } = req.body
    // find a user using their unique identifier
    const user = await userModel.findOne({
        $or:[
            {email: email},
            {username:username},
            {phone:phone}

        ]
       
    });
    if (!user) {
        return res.status(401).json('user not found')
    } else {
        // verify their password
        const correctPassword = bcrypt.compareSync(req.body.password, user.password)
        if (!correctPassword) {
            res.status(401).json('invalid credentials');
        }
        req.session.user = {id:user.id}
        // Generate a session
        res.status(200).json('login successful');
    }

};

const logout = async (req, res, next) => {
   try {
     // Destroy user response
   await req.session.destroy();
   // user response
   res.status(200).json('logout successful')
   } catch (error) {
    next(error)
   }
};

export const profile = async (req, res, next) => {
    try {
        // find user by Id
    const user = await userModel.findById(req.session.user.id)
    // return response
    res.status(200).json(user)
    } catch (error) {
       next(error) 
    }
};
