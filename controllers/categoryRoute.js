import { categoryModel } from "../models/category.js";

export const getCategories = async (req, res, next) => {
    try {
        // Get all categories from database
        const allCategories = await categoryModel.find();
        // rReturn response
        res.status(200).json(allCategories);

    } catch (error) {
        next(error);
    }
}

export const postCategory = async (req, res, next) => {
    try {
        // Add category to database
        const newCategory = await categoryModel.create(req.body);
        // Return fresponse
        res.status(201).json(newCategory)
    } catch (error) {
        next(error)
    }
}