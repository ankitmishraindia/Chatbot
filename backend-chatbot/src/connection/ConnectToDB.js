import mongoose from "mongoose";

const connectionToDB=async ()=>{
    try {
        const { connection }=await mongoose.connect(
            process.env.MONGO_URI||'mongodb+srv://mishraankit987:billano786@cluster0.grlzxjc.mongodb.net/Chatbot'
        )
        if(connection)
        {
            console.log("Connected to MongoDB:",connection.host)
        }
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}
export default connectionToDB;