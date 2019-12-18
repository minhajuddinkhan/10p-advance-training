//app.index.js

const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const { initializeRoutes } = require('./routes')

class App {
    constructor(configuration) {
        this.app = express();
        this.router = express.Router();
        this.conf = configuration;
    }

    async bootstrap() {
        initializeRoutes(this.router);
        this.app.use(morgan())
        this.app.use(this.router);
        this.app.use(bodyParser());
        return Promise.resolve();
    }

    start(cb) {
        console.log(`starting server on port ${this.conf.port}`)
        this.app.listen(this.conf.port, cb);
    }
}

module.exports = { App }