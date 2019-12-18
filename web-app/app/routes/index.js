//  routes/index.js
const { FeedRoutes } = require("./feeds");

const initializeRoutes = router => {
  //list all routes here.
  new FeedRoutes(router);
};

module.exports = {
  initializeRoutes
};
