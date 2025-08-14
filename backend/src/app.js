import express from "express";
import {createServer} from "node:http";
import {Server} from "socket.io";



import mongoose from "mongoose";
import { connectToSocket } from "./controller/socketManeger.js";

import cors from "cors";

//import usersRoute from "./controller/routes/usersRoute.js";
import usersRoute from "./routes/usersRoute.js";

import dotenv from "dotenv";
dotenv.config();
const app=express();
const server = createServer(app);
const io =connectToSocket(server);

app.set("port",(process.env.PORT ||PORT));
// app.get('/home',(req,res)=>{
//     return res.json({"hello":"word"});
// })
app.use(cors());
app.use(express.json({limit:"40kb"}));
app.use(express.urlencoded({limit:"40kb",extended:true}));
app.use("/api/v1/users",usersRoute);

const start = async()=>{
   // app.set("mongo_user")
    const connectionDb = await mongoose.connect(process.env.MONGO_URL)
        console.log(`mongo connected db host:${connectionDb.connection.host}`);
    server.listen(app.get("port"),()=>{
        console.log("listing on port ");
    });
} 

start();
