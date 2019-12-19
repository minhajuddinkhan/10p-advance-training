// routes/user.js

// import our newly create controller;
const { UserController } = require('../controllers');
class UserRoutes {

  constructor(router, redis) {

    this.userCtrl = new UserController(redis);
    this.router = router;
    this.registerRoutes();

  }

  registerRoutes() {
        this.router.post("/api/v1/login", (req, res) => this.userCtrl.login(req, res));
        this.router.post('/api/v1/register', (req, res) => this.userCtrl.register(req, res));
  }

}

module.exports = { UserRoutes };
