const { FeedsRepo } = require('../repo');
const {InvalidContentFeed} = require('../errors');

class FeedsService {
    constructor() {
        this.feedsRepo = new FeedsRepo();
    }


    getFeeds() {
        return this.feedsRepo.getFeeds();
    }

    createFeed(feed) {
        if(!feed) {
            throw new InvalidContentFeed("empty content");
        }
        return this.feedsRepo.createFeed(feed);
    }
}
module.exports = { FeedsService };