const jwt = require('jsonwebtoken');
const {config} = require('../../config');


class Auth {
    constructor(redis) {
        this.redis = redis;
        this.jwt = jwt;
        this.config = config;
    }

    async authenticate(req, res, next) {

        if(req.path.includes('login') || req.path.includes('register')) {
            next();
            return
        }

        try {
            const token = req.headers['token'];
            if (!token) {
                throw Error("token required in headers");
            }
            const user =  await this.redis.get(token)
            if(!user) {
                throw Error("token does not exist in redis");
            }
            const decoded = this.jwt.verify(token, this.config.get('jwtSecret'))
            req.user = user;
            next();

        }
        catch (ex) {
            res.status(401)
            res.json({"message": "Unauthorized"})

        }
    }


}
module.exports = { Auth }