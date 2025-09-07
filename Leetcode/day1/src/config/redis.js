// import { createClient } from 'redis';
const { createClient } = require('redis');

const redisClient = createClient({
    username: 'default',
    password: process.env.REDIS_PASS,
    socket: {
        host: 'redis-18740.c241.us-east-1-4.ec2.redns.redis-cloud.com',
        port: 18740
    }
});

module.exports = redisClient

// client.on('error', err => console.log('Redis Client Error', err));

// await client.connect();

// await client.set('foo', 'bar');
// const result = await client.get('foo');
// console.log(result)  // >>> bar

