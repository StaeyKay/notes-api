// This file is to connect the database via mongoose
import 'dotenv/config'
import mongoose from 'mongoose'

const mongoUri = process.env.MONGO_URL;

export const dbConnection = () => {
    mongoose.connect(mongoUri).then(() => {
        console.log('Database is connected')
    })
}

