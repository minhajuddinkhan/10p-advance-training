
class MyEventEmitter extends require('events') {}

const ev1 = require('./ev1');
const ev2 = require('./ev2');

//now you have the control back
const myee = new MyEventEmitter()

ev1(myee)
ev2(myee)


myee.emit('some-event');
