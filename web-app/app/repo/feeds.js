
const { db } = require('../models')
const { FeedNotFound } = require('../errors');

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

  async updateFeed(feedId, feed) {
    const feedObject = await this.feeds.findOne({where: {id: feedId}});
    if (!feedObject) {
      throw {code: 404, message: "feed not found"}
    }
    return this.feeds.update({content: feed.content, lastContent: feedObject.content}, { where: { id: feedId }});
  }
}

module.exports = { FeedsRepo };