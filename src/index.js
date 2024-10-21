// require('dotenv').config({path: './env'})
// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";
// import express from 'express'
import dotenv from "dotenv"
import connectDB from './db/db.js'
import { app } from "./app.js"

// const app = express()
// first Method to approch database connection

dotenv.config({
    path: './env'
})

connectDB()
.then(() => {
    app.listen(process.env.PORT || 3000, () => {
        console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
})

// const app = express()
// second Approch Method to execute 
/*
// function  connectDB(){}
; ( async () => {
    try{
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
       app.on("error", () => {
            console.log("Not connect express js means express js error", error)
       })

       app.listen(process.env.PORT, () => {
        console.log(`App is Listening on port ${process.env.PORT}`)      
       })
    } catch (error){
        console.error("ERROR: ", error)
        throw error
    }
})()
*/