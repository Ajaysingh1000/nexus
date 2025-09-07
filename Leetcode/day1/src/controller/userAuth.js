
const User = require("../model/user");
const validator = require("../utils/validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Client = require("../config/redis");


const register = async (req, res) => {
    
    try {
        
        // validate data 
        validator(req.body);
        const {firstName , email , password} = req.body;
        req.body.password = await bcrypt.hash(password, 10);
        req.body.role = 'user';
        const user = await User.create(req.body);
        const token = jwt.sign({_id : user._id, email: email ,role: 'user'} , process.env.SECRET_KEY, {expiresIn: "30m"});
        
        // maxAge matlab cookie kitne time tak valid hogi
        res.cookie("token", token, {maxAge: 30*60*1000, httpOnly: true});
        res.status(201).send("User Created Successfully");

    } catch (error) {
        
        res.status(400).send(error.message);
        
    }
}



const login = async (req, res) => {
    
    try {

        const {email, password} = req.body;
        if (!email || !password) {
            throw new Error("Email and password are required");
        }
        const data = await User.findOne({email});
        if (!data) {
            throw new Error("Invalid credential");
        }

        const isAllow = await bcrypt.compare(password, data.password);
        if (!isAllow) {
            throw new Error("Invalid credential");
        }

        const token = jwt.sign({_id : data._id, email: email,role: 'user'} , process.env.SECRET_KEY, {expiresIn: "30m"});
        res.cookie("token", token, {maxAge: 30*60*1000, httpOnly: true});
        res.status(201).send("User Login Successfully");
        
    } catch (error) {
        res.status(400).send(error.message);
        
    }

}


const logout = async (req, res) => {
    try {
        // validate the token 
        // Token add kar dung Redis ke blocked list me
        // cookies ko clear kar dena hoga
        const token = req.cookies.token;
        const payload = jwt.decode(token);
        await Client.set(`token:${token}`, "blocked");
        await Client.expireAt(`token:${token}`, payload.exp);
        // res.clearCookie("token");
        res.cookie("token", null, {expires: new Date(Date.now())});
        res.send("Logout Successfully");

    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getProfile = async (req, res) => {
    try {
        res.send(req.user);
    } catch (error) {
        res.status(400).send(error.message);
    }
}


const adminRegister = async (req, res) => {
    try {
        validator(req.body);
        const {firstName , email , password} = req.body;
        req.body.password = await bcrypt.hash(password, 10);
        // req.body.role = 'admin';
        const user = await User.create(req.body);
        const token = jwt.sign({_id : user._id, email: email,role:user.role} , process.env.SECRET_KEY, {expiresIn: "30m"});
        res.cookie("token", token, {maxAge: 30*60*1000, httpOnly: true});
        res.status(201).send("Admin Created Successfully");
    } catch (error) {
        res.status(400).send(error.message);
    }
}


module.exports = {
    register,
    login,
    logout,
    getProfile,
    adminRegister
}