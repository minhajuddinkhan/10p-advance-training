//index.js

class UserService {
  constructor(authEventEmitter) {
    this.auth = authEventEmitter;
  }

  UserAuthenticated() {
    this.getUserFromDb().then(user => {
      this.auth.emit("user-login", user);
    }).catch((err) => {
        console.log('err?', err)
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

module.exports = { UserService };
