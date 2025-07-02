const express = require("express")
const dotenv = require("dotenv")
const connectdb = require("./config/db")
dotenv.config()


const app = express()

app.listen(process.env.PORT, () => {
    try{
        connectdb()
        console.log("server running on port "+ process.env.PORT);
    }catch(err){
        console.log(err);
    }
})