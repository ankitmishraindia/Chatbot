import {config} from 'dotenv';
config()
import express from 'express';
import cors from 'cors';
import routes from './Router/route.js';


const app=express();

//middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cors({
    origin:process.env.FRONTEND_URI
}))

//import route
app.use('/chatbot/',routes)

export default app;