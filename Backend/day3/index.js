// agar mujhe server create karna hai to node ja mai ek module hota hai http module

const http = require("http")

const server = http.createServer((req, res) => {
    // res.end("hello world")

    if (req.url === "/") {
        res.end("home page")
    }
    else if (req.url === "/about") {
        res.end("about page")
    }
    else {
        res.end("404 page")
    }
})


server.listen(3000, () => {
    console.log("server is running");
})