//  routes/index.js
const { FeedRoutes } = require("./feeds");
const { UserRoutes }  = require('./users');
const initializeRoutes = (router, dependencies) => {

  //list all routes here.
  new FeedRoutes(router, dependencies);
  new UserRoutes(router, dependencies.redis)
};

module.exports = {
  initializeRoutes
};
