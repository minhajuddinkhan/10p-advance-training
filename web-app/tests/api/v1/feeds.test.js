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

  it("can get feeds", async () => {
    return api
      .get("/api/v1/feeds")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200)
  });

});
