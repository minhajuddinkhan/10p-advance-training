const { Duplex } = require("stream");

class MyDuplex extends Duplex {
  constructor() {
    super();
  }

  _write(chunk, enc, cb) {
    console.log(chunk.toString());
    cb();
  }

  _read(size) {
    this.push("hello!");
  }
}
const myDuplex = new MyDuplex();

myDuplex.pipe(myDuplex);
//readableStream.pipe(writeStream)