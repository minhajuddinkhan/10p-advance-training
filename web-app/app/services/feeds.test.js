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
    feedService.createFeed({content});
    const feeds = feedService.getFeeds();
    expect(feeds.length).toBe(1);
  });

  it(" With invalid content - Should throw exception", () => {
    try {
      feedService.createFeed({content: "Hello!"});
    } catch (ex) {
      expect(ex).toBeInstanceOf(InvalidContentFeed);
    }
  });

  it("With valid id and data - should update feed", () => {
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
      updateFeed(_, feed) {
        this.feeds[0].lastContent = this.feeds[0].content;
        this.feeds[0].content = feed.content;
      }
    })();
    feedService.createFeed({ content: "Hello!" });
    feedService.updateFeed(1, { content: "Hello World Again" });
    expect(feedService.getFeeds()[0].content).toBe("Hello World Again");
  });
});
