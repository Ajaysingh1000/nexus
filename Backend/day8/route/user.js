const express = require("express");
const {User} = require("../model/user")
const userAuth = require("../middleware/userAuth");

// const app = express();
const userRouter = express.Router();


userRouter.get("/", userAuth , async (req, res) => {

    try {  
        res.send(req.result);
    } catch (error) {
        res.status(401).send({ error: "Unauthorized" });
    }
    
})


userRouter.delete("/:id", userAuth , async (req, res) => {

    try {  
        const data = await User.findByIdAndDelete(req.params.id)
        res.send(data);
    } catch (error) {
        res.status(401).send({ error: "Unauthorized" });
    }
    
})


module.exports = userRouter