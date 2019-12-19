const { App } = require("../../../app");
const { config } = require('../../../config');
const supertest = require("supertest");

describe("Feeds API", function() {
  let api;
  beforeAll(async () => {
    const app = new App(config);
    await app.bootstrap();
    api = supertest(app.get());
  });

  it("On getting without token - should get 401", async () => {
    return api
      .get("/api/v1/feeds")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(401)
  });

});
