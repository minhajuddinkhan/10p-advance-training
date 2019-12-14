const fs = require("fs");



const { Writable } = require('stream');

const ws = new Writable({
	write(c, enc, cb) {
		process.stdout.write(c)
		cb();
	}
});

ws.cork()
ws.write('hello!')
ws.write('hello again!')

setImmediate(() => {
	console.log('uncorking...')
	ws.uncork();
})