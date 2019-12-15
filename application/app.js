const { createClient, print } = require('redis');


const redisClient = createClient();

redisClient.on('error', (err) => {
    console.log('err occ', err);
});


redisClient.set('string key', 'string val', print);

// redisClient.lpush('basic-list', 'World!');
// redisClient.lpush('basic-list', 'Hello')

redisClient.lrange('basic-list', 0, 5, (err, reply)=> {
    if(err) {
        console.log(err)
    }
    else {
        console.log(reply);
    }
});