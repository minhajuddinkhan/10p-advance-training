// facebook.js

class FacebookService {
  constructor(credentials) {
      this.credentials = credentials;
  }

  NotifyUserForLoggingIn(user) {
    this.sendHttpNotification().then(() => {
      console.log("user notified on facebook.");
    });
  }

  sendHttpNotification() {
      //mock http request
      return Promise.resolve()
  }
}

module.exports = { FacebookService };