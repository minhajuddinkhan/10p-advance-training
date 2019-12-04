// app.js


const { AuthEventEmitter } = require('./auth');
const { SlackService } = require('./slack');
const { UserService } = require('./index');
const { FacebookService } = require('./facebook');
const { GmailService } = require('./gmail');
const ee = new AuthEventEmitter();

new SlackService({}, ee);
new FacebookService({}, ee);
new GmailService({}, ee);

const userService = new UserService(ee);

userService.UserAuthenticated()



