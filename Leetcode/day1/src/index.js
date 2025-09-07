
const express = require('express')
const app = express()
require('dotenv').config()
const cookieParser = require("cookie-parser");

const authRouter = require("./route/userAuth")
const problemRouter = require("./route/problemCreater")


const main = require("./config/db");
const redisClient = require('./config/redis');
app.use(express.json())
app.use(cookieParser())

app.use("/auth", authRouter)
app.use("/problem", problemRouter)

const InitializeConnection = async () => {
    
    try{
        await Promise.all([main(), redisClient.connect()]);
        console.log("connected to database");
        app.listen(process.env.PORT, () => {
            console.log("server is running at ", process.env.PORT);
        });
    }catch(err){
        console.log(err);
    }
}

InitializeConnection()


// main().then(() => {
//     console.log("connected to database");
//     app.listen(process.env.PORT , () => {
//         console.log("server is running at ", process.env.PORT);
//     });
// }).catch((err) => {
//     console.log(err);
// })


