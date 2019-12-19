class InvalidUser extends Error {
  constructor(...args) {
    super(args);
  }
}
class InvalidCredentials extends Error {
  constructor(...args) {
    super(args);
  }
}

class AlreadyExists extends Error {
  constructor(...args) {
    super(args);
  }
}

module.exports = { InvalidUser, InvalidCredentials, AlreadyExists };
