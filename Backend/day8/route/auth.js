const express = require("express");
const { User } = require("../model/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const userAuth= require("../middleware/userAuth");
const client = require("../config/redis")

const authRouter = express.Router();

// Add middleware directly to the router
authRouter.use(express.json());
authRouter.use(cookieParser());

authRouter.get("/login", userAuth, async (req, res) => {
  try {
    res.send(req.result);
  } catch (error) {
    res.status(401).send({ error: "Unauthorized" });
  }
});

authRouter.post("/register", userAuth, async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      throw new Error("Email and password are required");
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const data = await User.create({ ...req.body, password: hashedPassword });
    res.send(data);
  } catch (error) {
    res.status(500).send({ error: "Internal Server Error" });
  }
});

authRouter.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      throw new Error("Email and password are required");
    }
    const data = await User.findOne({ email });
    if (!data) {
      throw new Error("Invalid Email");
    }

    const isAllow = await bcrypt.compare(password, data.password);
    if (!isAllow) {
      throw new Error("Invalid Password");
    }

    const token = jwt.sign(
      { _id: data._id, email: data.email },
      process.env.SECRET_KEY, {
        expiresIn: "30m",
      }
    );

    res.cookie("token", token, {httpOnly: true }); // fixed
    res.send("Login Successfully");
  } catch (error) {
    res.status(400).send(error.message);
  }
});


// redis ke database main humko blocked Token store karna padega
authRouter.get("/logout", userAuth, async (req, res) => {

  try {
    // solution 1
    // res.cookie("token", "abcdef")
    // solution 2
    // cookie ko hi clear kardo 
    // res.clearCookie("token");

    // token ko verify karna jaroori hai 
    const token = req.cookies.token;

    if (!token) {
      throw new Error("Token is Required");
    }

    const payload = jwt.decode(token);
    console.log(payload);
    

    if (!payload || !payload.exp) {
      throw new Error("Invalid token payload");
    }

    await client.set(`token:${token}`, "blocked");
    await client.expireAt(`token:${token}`, payload.exp);
    res.clearCookie("token");
    res.send("Logout Successfully");
  } catch (error) {
    res.status(400).send(error.message);
  }
}); 

module.exports = authRouter;
