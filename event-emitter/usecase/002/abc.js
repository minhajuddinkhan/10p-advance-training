

myEventEmitter = require('some-event-emmiter-module');

class ABC {
    constructor(ee) {
        this.eventEmitter = ee;
    }
    someFunc() {
        this.myEventEmitter.emit();
    }
}


function TestAbcService() {

    const m = mockEventEmitter()
    const myAbc = new ABC(m) 
    myAbc.someFunc()
}