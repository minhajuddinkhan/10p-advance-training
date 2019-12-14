const { Transform } = require('stream');

const tr =  new Transform({
    objectMode: true,
    transform(chunk, encoding, cb) {
        this.push(chunk.toString().toUpperCase())
        cb();
    }
})
tr.setEncoding('utf-8')
process.stdin.pipe(tr).pipe(process.stdout)

