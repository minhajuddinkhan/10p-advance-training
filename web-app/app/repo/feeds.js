
const { db } = require('../models')

class FeedsRepo {
  constructor() {
    this.feeds =  db.Feed;
  }

  getFeeds() {
    return this.feeds.findAll({});
  }

  createFeed(feed) {
    return this.feeds.create(feed);
  }
}

module.exports = { FeedsRepo };