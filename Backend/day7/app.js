

const express = require("express");

const app = express();
const {User} = require("./model/user")

const {connect} = require("./index")

app.use(express.json());

app.get("/info", async (req, res) => {

    const data = await User.find({});
    res.send(data);
    
})

app.post("/info", async (req, res) => {

    const data = await User.create(req.body);
    res.send(data);
})


connect().then(() => {
    console.log("connected to database");
    app.listen(4000, () => {
        console.log("server is running at 4000");
    });
})








