const { createClient }  = require('redis');

const redisClient = createClient({
    username: 'default',
    password: process.env.REDIS_PASS,
    socket: {
        host: 'redis-11363.c301.ap-south-1-1.ec2.redns.redis-cloud.com',
        port: 11363
    }
});

module.exports = redisClient;