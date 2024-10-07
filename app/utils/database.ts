import mongoose, { ConnectOptions } from "mongoose";

let isConnected: boolean = false; // track the connection

/**
 * Connects to the MongoDB instance.
 * 
 * If the connection is already established, does nothing.
 * If the connection attempt fails, logs the error.
 * 
 * @returns {Promise<void>}
 */
export const connectToDB = async () => {
    mongoose.set('strictQuery', true)

    if (isConnected) {
        console.log('MongoDB is already connected');
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI!, {
            dbName: 'tasks',
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
        } as ConnectOptions
    )
    } catch (error) {
        console.log(error)
    }
}