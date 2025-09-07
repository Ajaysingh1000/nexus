const client =  require('../config/redis')


const rateLimiter = async (req, res, next) => {

    try {   

        const ip = req.ip

        const count = await req.incr(ip);

        if (count > 60) {
            throw new Error("Rate limit exceeded")
        }

        if (count==1){
            await client.expire(3600);
        }
        next();
    } catch (error) {
        res.status(400).send(error.message);
    }
    
}

module.exports = rateLimiter

