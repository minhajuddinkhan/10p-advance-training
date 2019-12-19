//app.index.js

const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const { initializeRoutes } = require("./routes");
const { db, initialize } = require("./models");
const { Redis } = require("./cache");
const { Auth } = require("./middlewares");

class App {
  constructor(configuration) {
    this.app = express();
    this.dependencies = {};
    this.router = express.Router();
    this.conf = configuration;
    this.dependencies.redis = new Redis();
    this.authMiddleware = new Auth(this.dependencies.redis);
  }

  async bootstrap() {
    await this.syncDatabase();
    this.instantiateRedis();
    initializeRoutes(this.router, this.dependencies);
    if (this.conf.get("debug")) {
      this.app.use(morgan('combined'));
    }
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(bodyParser.json());
    this.app.use((req, res, next) =>
      this.authMiddleware.authenticate(req, res, next)
    );
    this.app.use(this.router);
    return Promise.resolve();
  }

  syncDatabase() {
    const { database, username, password, postgresConf } = this.conf.get("db");
    initialize(database, username, password, postgresConf);
    return db.sequelize.sync();
  }

  instantiateRedis() {}

  get() {
    return this.app;
  }

  start(cb) {
    console.log(`starting server on port ${this.conf.get("port")}`);
    this.app.listen(this.conf.get("port"), cb);
  }
}

module.exports = { App };
