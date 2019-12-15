const { Stack } = require("../stack");

describe("Stack", () => {
  let myStack;

  beforeEach(() => {
    myStack = new Stack();
  });

  it("new stack is empty", () => {
    expect(myStack.isEmpty()).toBe(true);
  });

  it("after one push is not empty", () => {
    myStack.push(0);
    expect(myStack.isEmpty()).toBe(false);
  });

  it("will throw underflow when empty stack is popped", () => {
    try {
      myStack.pop();
    } catch (ex) {
      expect(ex).toBeInstanceOf(Stack.StackUnderflowError);
    }
  });

  it("After one push and one pop - stack should be empty", () => {
    myStack.push();
    myStack.pop();
    expect(myStack.isEmpty()).toBe(true);
  });

  it("after two pushes and one pop - will not be empty", () => {
      myStack.push(0);
      myStack.push(0);
      myStack.pop();
      expect(myStack.isEmpty()).toBe(false);
  });

  it("after pushing X - will pop X", () => {
      
      myStack.push(123);
      expect(myStack.pop()).toBe(123);
      myStack.push(143);
      expect(myStack.pop()).toBe(143)
  })
});
