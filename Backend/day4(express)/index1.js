
const express = require('express');

const app = express();

// parsing karni hoti hai
app.use(express.json());
// json format mai data aaya hai usse hume JS object mai convert karna hota hai

app.use("/about", (req, res) => {
    // console.log(req.params);
    res.send("this is about page");
});

app.get("/user", (req, res) => {
    res.send("this is contact page");
})
app.post("/user", (req, res) => {
    console.log(typeof req.body['age']);
    res.send("this is contact page");
})

app.listen(4000, () => {
    console.log("server is running at 4000");
});