


const { Writable } = require('stream');


const ws = new Writable({
 write(chunk, _, cb) {
    process.stdout.write(chunk)
    setTimeout(() => {
        cb();
    }, 10)
 }
})

let isDrained = true;

ws.on('drain', () => {
    console.log('Drain event!')
})

setInterval(() => {
    // console.log('is writable?', ws.writable)
    if(isDrained) {
        isDrained = ws.write("Hello!", () => {
            // console.log("written!")
        })
        console.log(isDrained)
    }
}, 1)