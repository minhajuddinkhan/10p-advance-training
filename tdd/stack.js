class Stack {
  constructor() {
    this.size = 0;
    this.elements = [];
  }

  isEmpty() {
    return this.size === 0;
  }

  push(element) {
    this.elements[this.size++] = element;
  }
  pop() {
    if (this.isEmpty()) {
      throw new Stack.StackUnderflowError("underflow");
    }
    return this.elements[--this.size]
  }
}

Stack.StackUnderflowError = class extends Error {
  constructor(...args) {
    super(...args);
  }
};

module.exports = { Stack };
