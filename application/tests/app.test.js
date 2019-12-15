const request = require("supertest");
const app = require("../app");

const { UserService } = require('../db');
console.log(UserService)

describe("Sample Test", () => {
  beforeEach(() => {
  });

  it("should test that true === true",async () => {
    const userService = new UserService();
    jest
      .spyOn(userService, 'getUser')
      .mockImplementation(() => jest.fn(() => 2))


    expect(userService.getUser()).toBe(2)
    

  });
});
