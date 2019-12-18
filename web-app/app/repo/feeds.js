class FeedsRepo {
  constructor() {
    this.feeds = [];
  }

  getFeeds() {
    return this.feeds;
  }

  createFeed(feed) {
    this.feeds.push(feed);
  }
}

module.exports = { FeedsRepo };