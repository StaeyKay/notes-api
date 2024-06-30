import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const noteSchema = new Schema ({
    title: {type: String},
    noteType: {type: String, enum: ['short', 'long']},
    noteDetail: {type: String},
    createdAat: {type: Date, default: Date.now()},
    updatedAt: {type: Date, default: Date.now()}
})

export const noteModel = model('note', noteSchema);