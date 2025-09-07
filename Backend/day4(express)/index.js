const express = require("express");

const app = express();

app.use("/about/:id/:user", (req, res) => {
  console.log(req.params);
  res.send("this is about page");
});

app.use("/contact", (req, res) => {
  res.send("this is contact page");
});
app.use("/", (req, res) => {
  res.send("I am your home page");
});

app.listen(4000, () => {
  console.log("server is running at 4000");
});
