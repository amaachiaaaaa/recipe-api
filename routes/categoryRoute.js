import { Router } from "express";
import multer from "multer";
import { localupload, remoteUpload } from "../middlewares/uploads.js";
import { getCategories, postCategory } from "../controllers/categoryRoute.js";

// create upload midddleware
const upload = multer({ dest: 'uploads/' })

// Create a router
const categoryRouter = Router();

// Define Router
categoryRouter.get('/categories', getCategories);

categoryRouter.post('/categories', remoteUpload.single('image'), postCategory);

// Export router
export default categoryRouter;