import express from "express";
import mongoose from "mongoose";
import expressOasGenerator from "express-oas-generator";
import recipeRouter from "./routes/recipe.js";
import categoryRouter from "./routes/categoryRoute.js";

// connnect to database
await mongoose.connect(process.env.MONGO_URL);


// Create Express App
const app = express();
expressOasGenerator.handleResponses(app, {
    tags: ['categories', 'recipes'],
    mongooseModels: mongoose.modelNames(),
});

// aqpplying middleware
app.use(express.json());
app.use(express.static('uploads'));

// use route
app.use(recipeRouter);
app.use(categoryRouter);
expressOasGenerator.handleRequests();
app.use((req,res) => res.redirect('/api-docs/'));

// Listen for incoming requests
const port = process.env.PORT || 8000;
// const port = 8000;
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});

// wLgiak5aM3FXgdp4