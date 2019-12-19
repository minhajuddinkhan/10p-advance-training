class InvalidContentFeed extends Error {
    constructor(...args) { super(args) }
}

class FeedNotFound extends Error {
    constructor(...args) { super(args) }
}

module.exports = {
    InvalidContentFeed,
    FeedNotFound
}