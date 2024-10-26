import mongoose from "mongoose";

const connectdb = async () => {
    // try {
    mongoose.connection.on('connected', () => console.log("Database Connected"))
    await mongoose.connect(`${process.env.MONGODB_URI}/prescripto`)
    //     console.log('Database Connected')
    // } catch (error) {
    //     console.log('Database not connected')
    // }

}
export default connectdb