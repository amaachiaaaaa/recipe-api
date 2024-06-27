import express from "express"
import recipeRouter from "./routes/recipe.js";
import mongoose from "mongoose";

// connnect to database
await mongoose.connect(process.env.MONGO_URL);


// Create Express App
const app = express();

// aqpplying middleware
app.use(express.json());

// use route
app.use(recipeRouter);

// Listen for incoming requests
const port = 8000;
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});

// wLgiak5aM3FXgdp4