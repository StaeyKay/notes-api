import express from "express";
import 'dotenv/config'
import { noteRouter } from "./routes/note_router.js";
import { dbConnection } from "./config/db.js";
import { userRouter } from "./routes/user_routes.js";

// Create the server
const app = express();

dbConnection();

// Add the middleware
app.use(express.json());

// Define routes
app.use('/api/v1', noteRouter)
app.use('/api/v1', userRouter)


// Listen to incoming requests
app.listen(4001, () => {
    console.log("The app is listening")
});

