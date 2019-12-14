const { Duplex } = require("stream");


const myDuplex = new Duplex({
    objectMode: true,
    read() {
        this.push({"key": "value"})
    },
    write(chunk) {
        console.log(chunk)
    },
})


myDuplex.pipe(myDuplex)