import {config} from 'dotenv';
config()
import express from 'express';
import cors from 'cors';
import routes from './Router/route.js';


const app=express();

//middleware
app.use(express.json())
app.use(cors({
    origin:process.env.FRONTEND_URI|| 'http://localhost:5173'
}))

//it is  used as a middleware to extract details from encoded urls 
app.use(express.urlencoded({ extended: true }));


//import route
app.use('/chatbot/',routes)

export default app;