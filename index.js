import express from "express"
import recipeRouter from "./routes/recipes.js";

// Create Express App
const app = express();

// Define routes
app.get('/', (req,res) => {
    res.json('Welcome home');
});

app.post('/login', (req, res) => {
    res.json('login successfully');
});

app.patch('/wonderful', (req, res) => {
    res.json('wonderfully and fearfully made');
});

// use route
app.use(recipeRouter);

// Listen for incoming requests
app.listen(3000, () => {
    console.log('App listening on port 3000')
})