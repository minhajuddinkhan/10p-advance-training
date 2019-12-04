// slack.js


class SlackService {
    constructor(credentials) {
        this.credentials = credentials;
    }


    NotifyUserForLoggingIn(user) {
        this.sendsHttpNotification()
        .then(() => {
            console.log('message slacked on slack')
        })
    }

    sendsHttpNotification() {
        return Promise.resolve()
    }
}

module.exports = { SlackService };