const express = require("express");
const app = express();
const main  = require("./index")                                                                   

app.use(express.json())


app.post('/chat', async (req, res) => {

    const {msg} = req.body;
    t = await main(msg)
    res.send(t);
})








app.listen(4000, () => {
    console.log("server is running at 4000");
});