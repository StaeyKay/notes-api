import express from "express";
import { noteRouter } from "./routes/note_router.js";

// Create the server
const noteApp = express();

// Define routes
noteApp.use(noteRouter)

// Listen to incoming requests
noteApp.listen(4001, () => {
    console.log("The app is listening")
});