
const { Readable } = require("stream");

const inStream = new Readable({
    encoding:'utf8',
    read() {}
})

inStream.on('error', (err) => {
    console.log(err)
})

inStream.on('data', (data) => {
    console.log(data);
})

setInterval(() => {
    if(inStream.isPaused()) {
        console.log('resumed!')
        inStream.resume();
        return
    }
    console.log('pausing..!')
    inStream.pause();
}, 5000)


setInterval(() => {
    inStream.push('hello!')
}, 500)
