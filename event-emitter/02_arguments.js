
const EventEmitter = require('events')
class MyEmitter extends EventEmitter{ }

const emitter = new MyEmitter()

emitter.on("goku", (powerMove) => {
    console.log("its time for goku's " + powerMove.power);
})

emitter.emit('goku', {power: 'Kamehameha'})