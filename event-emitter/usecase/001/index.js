//index.js

class UserService {
  constructor(gmailService, facebookService, slackService) {
    this.gmailService = gmailService;
    this.slackService = slackService;
    this.facebookService = facebookService;
  }

  UserAuthenticated() {
    this.getUserFromDb().then(async user => {
      if (user.hasGmailAccount) {
        this.gmailService.NotifyUserForLoggingIn();
      }

      if(user.hasSlackAccount) {
          this.slackService.NotifyUserForLoggingIn();
      }

      if(user.hasFacebookAccount) {
            this.facebookService.NotifyUserForLoggingIn();
      }

    });
  }

  getUserFromDb() {
    return Promise.resolve({
      id: 1,
      name: "John",
      fullName: "John Super Doe",
      hasGmailAccount: true,
      hasSlackAccount: true,
      hasFacebookAccount: true
    });
  }
}

module.exports = { UserService }