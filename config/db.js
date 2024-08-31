// This file is to connect the database via mongoose
import 'dotenv/config'
import mongoose from 'mongoose'

const connectionString = process.env.MONGO_URL;

export const dbConnection = async () => {
    try {
        await mongoose.connect(connectionString)
        console.log('Database is connected')
    } catch (error) {
        console.log(error.message)
    }
    
}

