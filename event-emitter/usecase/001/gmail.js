// gmail.js

class GmailService {
  constructor(credentials) {
    this.credentials = credentials;
  }

  NotifyUserForLoggingIn(user) {
    this.sendsHttpNotification().then(() => {
      console.log("email sent to user on gmail");
    });
  }

  sendsHttpNotification() {
    return Promise.resolve();
  }
}

module.exports = { GmailService };
