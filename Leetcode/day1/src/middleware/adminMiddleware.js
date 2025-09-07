const jwt = require("jsonwebtoken");
const User = require("../model/user");
const redisClient = require("../config/redis");

const adminMiddleware = async (req, res, next) => {
    
    try{
        const token = req.cookies.token;
        if (!token) {
            throw new Error("Token is invalid");
        }
        // yaha se payload aata hai 
        const payload = await jwt.verify(token, process.env.SECRET_KEY);
        const {_id} = payload;
        if (!_id) {
            throw new Error("Token is invalid");
        }
        const data = await User.findOne({_id});
        if (!data) {
            throw new Error("User not found");
        }

        if (!data.role === 'admin') {
            throw new Error("Invalid token");
        }
        // redis ke block list me present to nahi hai   
        
        const isBlocked = await redisClient.exists(`token:${token}`);
        if (isBlocked) {
            throw new Error("Token is blocked");
        }
        req.result = data;
        next();
        
    }catch(error){
        res.status(400).send(error.message);
    }
}

module.exports = adminMiddleware