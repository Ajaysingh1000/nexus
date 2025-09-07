const {User} = require("../model/user");
const jwt = require("jsonwebtoken");
const client = require("../config/redis")


const userAuth = async (req, res, next) => {

    try {

        const token = req.cookies.token;

        if (!token){
            return res.status(401).send("Token not exist");
        }
        const payload = jwt.verify(token, process.env.SECRET_KEY);
        // console.log(payload);
        
        const {_id} = payload
        if (!_id){
            return res.status(401).send("id not exist");
        }
        const data = await User.findById({_id});

        if (!data){
            return res.status(404).send("User not exist");
        }

        const isBlocked = await client.exists(`token:${token}`)

        if (isBlocked){
            return res.status(401).send("User is blocked");
        }

        req.result = data

        next()
        
    } catch (error) {
        return res.status(401).send(error.message)
        
    }
}

module.exports = userAuth

