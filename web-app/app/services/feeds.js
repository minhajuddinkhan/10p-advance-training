const { FeedsRepo } = require('../repo');

class FeedsService {
    constructor() {
        this.feedsRepo = new FeedsRepo();
    }


    getFeeds() {
        return this.feedsRepo.getFeeds();
    }

    createFeed(feed) {
        return this.feedsRepo.createFeed(feed);
    }
}
module.exports = { FeedsService };