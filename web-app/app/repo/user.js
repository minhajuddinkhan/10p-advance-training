const { db } = require("../models");

class UsersRepo {
  constructor() {
    this.users = db.User;
  }

  async getByEmail(email) {
    return this.users.findOne({ where: { email: email } });
  }

  create(user) {
    return this.users.create(user);
  }

  
}

module.exports = { UsersRepo };
