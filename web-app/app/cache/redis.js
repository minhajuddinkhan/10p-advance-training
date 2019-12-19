const redis = require("redis");

class Redis {
  constructor() {
    this.isConnected = false;
    this.redisClient = new redis.createClient();
    this.redisClient.on("error", console.log);
  }

  get(key) {
    return new Promise((resolve, reject) => {
      this.redisClient.get(key, (err, data) => {
        if (err) {
          reject(err);
        }
        resolve(data);
      });
    });
  }

  set(key, value) {
    return this.redisClient.set(key, JSON.stringify(value));
  }

  close() {
    this.redisClient.quit();
  }
}

module.exports = { Redis };
