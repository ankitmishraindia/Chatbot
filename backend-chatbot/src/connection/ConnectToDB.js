import mongoose from "mongoose";
//if we make extra queries, then it will not show errors if it is unable to show
const connectionToDB=async ()=>{
    try {
        const { connection }=await mongoose.connect(
            process.env.MONGO_URI
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