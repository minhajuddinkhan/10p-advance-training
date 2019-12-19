const Joi = require("@hapi/joi");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { config } = require("../../config");

const { user: userExceptions } = require("../errors");
const { UsersRepo } = require("../repo");
const { user: userValidators } = require("../validators");

class UserService {
  constructor(redis) {
    this.userRepo = new UsersRepo();
    this.bcrypt = bcrypt;
    this.redis = redis;
    this.saltRounds = 10;
    this.conf = config;
    this.jwt = jwt;
  }

  async login({ email, password }) {
    const valid = userValidators.loginSchema.validate({ email, password });
    if (valid.error) {
      console.log(valid.error);
      throw new userExceptions.InvalidCredentials(valid.error);
    }

    const foundUser = await this.userRepo.getByEmail(email);
    if (!foundUser) {
      throw new userExceptions.InvalidCredentials("User already exists");
    }
    let isPasswordSame;
    try {
        isPasswordSame = await new Promise((resolve, reject) => {
        this.bcrypt.compare(password, foundUser.hashedPassword, (err, x) => {
          if (err) {
            throw err;
          }
          console.log(x)
          resolve(x);
        });
      });
    } catch (ex) {
      throw new userExceptions.InvalidCredentials(ex.message);
    }
    if(!isPasswordSame) {
            throw new userExceptions.InvalidCredentials("invalid email/password");

    }

    const token = this.jwt.sign(
      {
        iat: Math.floor(Date.now() / 1000) - 30,
        id: foundUser.id,
        email: foundUser.email
      },
      this.conf.get("jwtSecret")
    );

    this.redis.set(token, foundUser);
    return token;
  }

  async register(user) {
    const valid = userValidators.userSchema.validate(user);
    if (valid.error) {
      console.log(valid.error.details);
      throw new userExceptions.InvalidUser(valid.error);
    }

    const foundUser = await this.userRepo.getByEmail(user.email);
    if (foundUser) {
      throw new userExceptions.AlreadyExists("User already exists");
    }
    user.hashedPassword = await new Promise((resolve, reject) => {
      bcrypt.hash(user.password, this.saltRounds, function(err, hash) {
        if (err) {
          reject(err);
        }
        resolve(hash);
      });
    });
    delete user.password;

    return this.userRepo.create(user);
  }
}

module.exports = { UserService };
