//app.js

const { UserService } = require('./index');
const { FacebookService } = require('./facebook');
const { GmailService } = require('./gmail');
const { SlackService } = require('./slack');

const facebookService = new FacebookService({})
const gmailService = new GmailService({})
const slackService = new SlackService({})

const userService = new UserService(gmailService, facebookService, slackService)

userService.UserAuthenticated()