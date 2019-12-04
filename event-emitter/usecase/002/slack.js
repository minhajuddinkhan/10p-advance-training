// slack.js

const { EventEmitter } = require("events");

class SlackService {
  constructor(credentials, authEventEmitter) {
    this.credentials = credentials;
    authEventEmitter.on("user-login", (user) => this.NotifyUserForLoggingIn(user));
  }

  NotifyUserForLoggingIn(user) {
    if(!user.hasFacebookAccount) {
        return;
    }
    this.sendsHttpNotification().then(() => {
      console.log("message slacked on slack");
    }).catch(() => {
        console.log("could not notify slack")
    });
  }

  sendsHttpNotification() {
    return Promise.resolve();
  }
}

module.exports = { SlackService };
