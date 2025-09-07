const redis = require('redis');
const { createClient } = redis;

const client = createClient({
    username: 'default',
    password: 'xxRhcN0mfqiQ9mh2jNXXzJ61kY647FdX',
    socket: {
        host: 'redis-14874.crce179.ap-south-1-1.ec2.redns.redis-cloud.com',
        port: 14874
    }
});

// const connectRedis = async () => {
//     try {
//         await client.connect();
//         console.log('Connected to Redis');
//     } catch (err) {
//         console.error(err);
//     }
// }
// connectRedis()
module.exports = client
// module.exports = connectRedis


// client.on('error', err => console.log('Redis Client Error', err));

// client.connect();

// client.set('foo', 'bar');
// const result = client.get('foo');
// console.log(result)  // >>> bar

// module.exports = client
