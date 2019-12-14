
const { Writable } = require('stream');


const ws = new Writable({
 write(chunk) {
	process.stdout.write(chunk)
 }
})

process.stdin.pipe(ws)
