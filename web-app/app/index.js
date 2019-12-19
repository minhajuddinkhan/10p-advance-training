//app.index.js

const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const { initializeRoutes } = require('./routes')
const { db, initialize } = require('./models');

class App {
    constructor(configuration) {
        this.app = express();
        this.router = express.Router();
        this.conf = configuration;
    }

    async bootstrap() {
        await this.syncDatabase();
        initializeRoutes(this.router);
        this.app.use(morgan())
        this.app.use(bodyParser());
        this.app.use(this.router);
        return Promise.resolve();
    }

    syncDatabase() {
        const { database, username , password, postgresConf} = this.conf.get('db')
        initialize(database, username, password, postgresConf);
        return db.sequelize.sync();
    }

    get() {
        return this.app;
    }



    start(cb) {
        console.log(`starting server on port ${this.conf.get('port')}`)
        this.app.listen(this.conf.get('port'), cb);
    }
}

module.exports = { App }