
import app from "./src/app.js";
import connectionToDB from "./src/connection/ConnectToDB.js";



const PORT=process.env.PORT || 7000;



app.listen(PORT,async()=>{
    await connectionToDB();
    console.log("Server is runnning or port:",PORT)
})
