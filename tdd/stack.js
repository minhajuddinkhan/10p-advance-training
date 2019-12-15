class Stack {
  constructor() {
    this.size = 0;
    this.element = -1;
  }

  isEmpty() {
    return this.size === 0;
  }

  push(element) {
    this.element = element;
    this.size++;
  }
  pop() {
    
    if (this.isEmpty()) {
      throw new Stack.StackUnderflowError("underflow");
    }
    this.size--;
    return this.element;
  }
}

Stack.StackUnderflowError = class extends Error {
  constructor(...args) {
    super(...args);
  }
};

module.exports = { Stack };
