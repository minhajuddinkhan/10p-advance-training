
class AuthEventEmitter extends require('events').EventEmitter {
    constructor() {
        //any custom thing you wanna do here.
        super();
    }

    fireUserLoginEvent(user) {
        user.loggedInAt = Date.now()
        this.emit('user-login', user);
    }
}

module.exports = { AuthEventEmitter };