
const {FeedsService} = require('../services');

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
  constructor() {
    this.feedsService = new FeedsService();
  }

  getFeeds(req, res) {
      res.json({"feeds": this.feedsService.getFeeds()})
  }

  createFeeds(req, res) {
    console.log(req.body);
      this.feedsService.createFeed(req.body);
      res.json({"created": true})
  }
}

module.exports = { FeedsController };
