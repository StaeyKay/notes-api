import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const noteSchema = new Schema ({
    title: {type: String},
    noteType: {type: String, enum: ['short', 'long']},
    noteDetail: {type: String},
    noteStatus: {type: String, enum: ['open', 'closed']},
    createdAat: {type: Date, default: Date.now()},
    updatedAt: {type: Date, default: Date.now()}
})

export const noteModel = model('Note', noteSchema);