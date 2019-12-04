// gmail.js

class GmailService {
  constructor(credentials, ee) {
    this.credentials = credentials;
    ee.on("user-login", user => this.NotifyUserForLoggingIn(user));
  }

  NotifyUserForLoggingIn(user) {
    if (!user.hasGmailAccount) {
      return;
    }

    this.sendsHttpNotification()
      .then(() => {
        console.log("email sent to user on gmail");
      })
      .catch(() => {
        console.log("could not notify gmail");
      });
  }

  sendsHttpNotification() {
    return Promise.resolve();
  }
}

module.exports = { GmailService };
