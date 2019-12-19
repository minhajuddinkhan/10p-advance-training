// routes/user.js

// import our newly create controller;
const { FeedsController } = require('../controllers');
class FeedRoutes {

  constructor(router, redis) {

    this.feedController = new FeedsController(redis);
    this.router = router;
    this.registerRoutes();

  }

  registerRoutes() {
        this.router.get("/api/v1/feeds", (req, res) => this.feedController.getFeeds(req, res));
        this.router.post('/api/v1/feeds', (req, res) => this.feedController.createFeeds(req, res));
        this.router.put('/api/v1/feeds/:id', (req, res) => this.feedController.updateFeeds(req, res));
  }

}

module.exports = { FeedRoutes };
