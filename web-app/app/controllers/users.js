const { UserService } = require("../services");

class UserController {
  constructor(redis) {
    this.userService = new UserService(redis);
  }

  async register(req, res) {
    try {
      const token = await this.userService.register(req.body);
      res.json({ token });
    } catch (ex) {
      res.status(500);
      res.json({"message": "something went wrong", error: (ex.message)})
    }
  }

  async login(req, res) {
    try {
      const token = await this.userService.login(req.body);
      res.json({ token });
    } catch (ex) {
      res.status(500);
      res.json({"message": ex.message})
    }
  }
}

module.exports = { UserController };
