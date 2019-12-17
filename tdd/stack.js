

class UnderflowException extends Error {
    constructor(...args) {
        super(args);
    }
}

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
        if(this.isEmpty()){
            throw new UnderflowException("stack is empty")
        }
        return this.elements[--this.size];
    }

}

Stack.UnderflowException = UnderflowException;

module.exports = { Stack }