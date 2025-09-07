const express = require("express");
const app = express();
const {connect} = require("./index")
require("dotenv").config()
const client = require("./config/redis")
// console.log(process.env)
const rateLimiter = require("./middleware/rateLimiter")

const authRouter = require("./route/auth")
const userRouter = require("./route/user")

app.use(rateLimiter())
app.use("/auth", authRouter)
app.use("/user", userRouter)


const initializeConnection = async () => {
    try {
        // await client.connect();
        // console.log('Connected to Redis');

        // await connect()
        // console.log("connected to database");
        await Promise.all([client.connect(), connect()])
        console.log("connected to database");

        app.listen(process.env.PORT || 4000, () => {
            console.log("server is running at", process.env.PORT || 4000);
        });
    } catch (err) {
        console.error(err);
    }
}


initializeConnection()

// connect().then(() => {
//     console.log("connected to database");
//     app.listen(process.env.PORT || 4000, () => {
//         console.log("server is running at", process.env.PORT || 4000);
//     });
// })

