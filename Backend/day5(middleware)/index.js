const express = require("express");

const app = express();

// app.use(
//   "/user",
//   // in functions ko hum route handler bhi bolte hai
//   (req, res, next) => {
//     // res.send("this is user page")
//     next(); // agle wale function ko call karo
//   },
//   (req, res,next) => {
//     // res.send("this is source page");
//     next();
//   },
//   (req, res) => {
//     res.send("this is destination page");
//   }
// );

// app.use(route , [RH,RH,RH])


// app.use("/user", (req, res, next) => {
//     console.log("first");
//     next();
//     console.log("sixth");
    
// }, (req, res, next) => {
//     console.log("second");
//     next();
//     console.log("fifth");
    
// }, (req, res, next) => {
//     console.log("third");
//     res.send("this is destination page");
//     console.log("fourth"); 
// });

// ye ek middleware hota hai
app.use("/user", (req, res, next) => {
    console.log("first");
    next();
    console.log("sixth");
    
})

// ye ek middleware hota hai
app.use("/user", (req, res, next) => {
    console.log("second");
    next();
    console.log("fifth");
    
})
// ye ek middleware nahi hai
app.use("/user", (req, res, next) => {
    console.log("third");
    res.send("this is destination page");
    console.log("fourth");
    
})

//middleware : mw -> mw -> mw -> RequestHandler

app.listen(4000, () => {
  console.log("server is running at 4000");
});
