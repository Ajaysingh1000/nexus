// import { createClient } from 'redis';
const { createClient } = require('redis');

const redisClient = createClient({
    username: 'default',
    password: process.env.REDIS_PASS,
    socket: {
        host: 'redis-19329.c277.us-east-1-3.ec2.redns.redis-cloud.com',
        port: 19329
    }
});

module.exports = redisClient

// client.on('error', err => console.log('Redis Client Error', err));

// await client.connect();

// await client.set('foo', 'bar');
// const result = await client.get('foo');
// console.log(result)  // >>> bar

