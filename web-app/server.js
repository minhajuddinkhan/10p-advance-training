// server.js

const { App } = require('./app');
const env = process.env.NODE_ENV || "development";
const config = require('./configuration')[env];

const app = new App(config);

app.bootstrap()
.then(() => app.start());

// 1. require app
// 2. bootstrap
// 3. start the application