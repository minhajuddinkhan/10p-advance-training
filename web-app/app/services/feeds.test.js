const { FeedsService } = require("./feeds");
const { InvalidContentFeed } = require("../errors");

describe("Feeds Service", () => {
  let feedService;
  beforeEach(() => {
    feedService = new FeedsService();
    //mocking the repo methods
    // getFeeds
    // createFeed

    feedService.feedsRepo = new (class {
      constructor() {
        this.feeds = [];
      }
      getFeeds() {
        return this.feeds;
      }
      createFeed(feed) {
        this.feeds.push(feed);
      }
    })();
  });
  it("With valid content - Should create Feed", () => {
    const content = "hello World!";
    feedService.createFeed(content);
    const feeds = feedService.getFeeds();
    expect(feeds.length).toBe(1);
  });

  it(" With invalid content - Should throw exception", () => {
    try {
      feedService.createFeed();
    } catch (ex) {
      expect(ex).toBeInstanceOf(InvalidContentFeed);
    }
  });
});
