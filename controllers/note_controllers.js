import { noteModel } from "../models/note_model.js"

export const addNote = async (req, res, next) => {
    try {
        const addData = await noteModel.create(req.body)
        console.log('request', req.body)
        res.json(addData)
    } catch (error) {
        next(error)
    }
}

export const getNotes = async (req, res, next) => {
    try {
        const allNotes = await noteModel.find();
        console.log("Notes successfully retrieved")
        res.json(allNotes)
    } catch (error) {
        next(error)
    }
}

export const getNote = async (req, res, next) => {
    try {
        const note = await noteModel.findById(req.params.id)
        console.log(`Note with ID ${req.params.id} has been retrieved successfully`)
        res.json(note)
    } catch (error) {
        next(error)
    }
}

export const updateNote = async (req, res, next) => {
    try {
        const addData = await noteModel.findByIdAndUpdate(req.params.id)
        console.log(`Note with ID ${req.params.id} has been updated`)
        res.json(addData)
    } catch (error) {
        next(error)
    }
}

export const deleteNote = async (req, res) => {
    try {
        const deleteData = await noteModel.findByIdAndDelete(req.params.id)
        console.log(`Note with ID ${req.params.id} has been deleted`)
        res.json(`Note with ID ${req.params.id} has been deleted`)
    } catch (error) {
        next(error)
    }
}