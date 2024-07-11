import { categoryModel } from "../models/category.js";

export const getCategories = async (req, res, next) => {
    try {
        // Get query params
        const { limit = 10, skip = 0, filter ="()", fields = "()" } = req.query;
        // Get all categories from database
        const allCategories = await categoryModel
            .find(JSON.parse(filter))
            .select(JSON.parse(fields))
            .limit(limit)
            .skip(skip);
        // rReturn response
        res.status(200).json(allCategories);

    } catch (error) {
        next(error);
    }
}

export const postCategory = async (req, res, next) => {
    try {
        console.log(req.body);
        console.log(req.file);
        // Add category to database
        const newCategory = await categoryModel.create({
            ...req.body,
            image: req.file.filename
        });
        // Return fresponse
        res.status(201).json(newCategory)
    } catch (error) {
        next(error)
    }
}