import express from "express";
import 'dotenv/config'
import { noteRouter } from "./routes/note_router.js";
import { dbConnection } from "./db.js";

// Create the server
const noteApp = express();

dbConnection();

// Add the middleware
noteApp.use(express.json());

// Define routes
noteApp.use(noteRouter)

// Listen to incoming requests
noteApp.listen(4001, () => {
    console.log("The app is listening")
});

