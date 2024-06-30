import { Router } from "express";
import { deleteNote, getNote, getNotes, updateNote } from "../controllers/note_controllers.js";

// Create the router
export const noteRouter = Router();

// Define the routes
noteRouter.get('/notes', getNotes)

noteRouter.get('/notes/:id', getNote)

noteRouter.patch('/notes/:id', updateNote)

noteRouter.delete('/notes/:id', deleteNote)