const { FeedsService } = require("../services");
const { InvalidContentFeed, FeedNotFound } = require("../errors");
//  controllers/feed.js

// Steps
// 1. create a controller directory
// 2. create feeds.js and index.js
// 3. write a feed controller class with methods getFeeds and createFeeds
// 4. export the class and import in index.js
// 5. import the controllers in index.s and export
// 6. import controllers module in router
// 7. replace router methods with controller.

class FeedsController {
  constructor(redis) {
    this.feedsService = new FeedsService(redis);
  }

  async getFeeds(req, res) {
    res.json({ feeds: await this.feedsService.getFeeds() });
  }

  async createFeeds(req, res) {
    try {
      console.log('created By', req.user.id);
      await this.feedsService.createFeed(req.body);
      res.json({ created: true });
    } catch (ex) {
      switch (ex.constructor) {

        case InvalidContentFeed:
          res.status(400);
          res.json({ message: "Invalid content" });
          return;

        default:
          res.status(500);
          res.json({ message: "Something bad happened" });
          return;
          break;
      }
    }
  }

  async updateFeeds(req, res) {
    try {
      await this.feedsService.updateFeed(req.params.id, req.body);
      res.json({ updated: true });
    } catch (ex) {
      switch (ex.constructor) {
        case InvalidContentFeed:
          res.status(400);
          res.json({ message: "Invalid content" });
          return;

        case FeedNotFound:
          res.status(404);
          res.json({ message: "Feed not found" });
          return;

        default:
          res.status(500);
          res.json({ message: "Something bad happened" });
          return;
          break;
      }
    }
  }
}

module.exports = { FeedsController };
