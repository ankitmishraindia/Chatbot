import {config} from 'dotenv';
config()
import express from 'express';
import cors from 'cors';


const app=express();

//middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cors({
    origin:process.env.FRONTEND_URI
}))

export default app;