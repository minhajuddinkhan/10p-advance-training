const { FeedsRepo } = require('../repo');
const { Redis } = require('../cache');
const {InvalidContentFeed} = require('../errors');

class FeedsService {
    constructor() {
        this.feedsRepo = new FeedsRepo();
    }


    getFeeds() {
        return this.feedsRepo.getFeeds();
    }

    createFeed(feed) {
        if(!feed.content) {
            throw new InvalidContentFeed("empty content");
        }
        return this.feedsRepo.createFeed(feed);
    }

    updateFeed(feedId, feed) {
        return this.feedsRepo.updateFeed(feedId, feed);
    }
}
module.exports = { FeedsService };