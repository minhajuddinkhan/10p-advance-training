const { App } = require("../../../app");
const supertest = require("supertest");

describe("Feeds API", function() {
  let api;
  beforeAll(async () => {
    const app = new App({});
    await app.bootstrap();
    api = supertest(app.get());
  });

  it("can get feeds", async () => {
    return api
      .get("/api/v1/feeds")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200)
      .then(response => {
        expect(response.body.feeds.length).toBe(0);
      });
  });

});
