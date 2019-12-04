class MyEmitter extends require("events") {}

const emitter = new MyEmitter();

emitter.emit('error')
