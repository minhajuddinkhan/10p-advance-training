const { Stack } = require("../stack");

describe("stack", () => {
  let myStack;
  beforeEach(() => {
    myStack = new Stack();
  });

  it("new stack - should be empty", () => {
    expect(myStack.isEmpty()).toBe(true);
  });

  it("after one push - should not be empty", () => {
    myStack.push(0);
    expect(myStack.isEmpty()).toBe(false);
  });

  it("pop on empty stack - should throw error", () => {
      let exc;
        try {
              myStack.pop() //should throw exception
        }
        catch (ex) {
            exc = ex;
        };
        expect(exc).toBeInstanceOf(Stack.UnderflowException)
    });

    it('If pushed X -  should Pop X', () => {
        let x = 123;
        myStack.push(x)
        expect(myStack.pop()).toBe(x);
        x = 456;
        myStack.push(x)
        expect(myStack.pop()).toBe(x);
    })

    it('If push once and Pop once- Stack should be empty', () => {
        myStack.push(123)
        myStack.pop()
        expect(myStack.isEmpty()).toBe(true);
    })

    it('If push twice and pop once - stack should not be empty', () => {
        myStack.push(123);
        myStack.push(123);
        myStack.pop();
        expect(myStack.isEmpty()).toBe(false);
    })

    it('if push x and y - should pop y and x', () => {
        myStack.push(123);
        myStack.push(223);
        expect(myStack.pop()).toBe(223);
        expect(myStack.pop()).toBe(123);
    })
});
