// server.js

const { App } = require("./app");
const { config } = require("./config");

const app = new App(config);

app.bootstrap().then(() => app.start());

// 1. require app
// 2. bootstrap
// 3. start the application
