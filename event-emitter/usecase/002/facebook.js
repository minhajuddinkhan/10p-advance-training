// facebook.js

class FacebookService {
  constructor(credentials, authEventEmitter) {
    this.credentials = credentials;
    authEventEmitter.on("user-login", user =>
      this.NotifyUserForLoggingIn(user)
    );
  }

  NotifyUserForLoggingIn(user) {
    if (!user.hasFacebookAccount) {
      return;
    }

    this.sendHttpNotification()
      .then(() => {
        console.log("user notified on facebook.");
      })
      .catch(() => {
        console.log("could not notify facebook");
      });
  }

  sendHttpNotification() {
    //mock http request
    return Promise.resolve();
  }
}

module.exports = { FacebookService };
