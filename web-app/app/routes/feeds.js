// routes/user.js

class FeedRoutes {
  constructor(router) {
    router.get("/api/v1/feeds", (req, res) => this.getFeeds(req, res));
  }

  getFeeds(req, res) {
    res.json({ feeds: [] });
  }
}

module.exports = { FeedRoutes };
