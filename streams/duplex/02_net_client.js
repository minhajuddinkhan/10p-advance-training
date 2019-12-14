
const net = require('net');
const client = net.connect({
    port: 1337,
    host: 'localhost', //replace with ip;
}, () => {
        process.stdin
        .pipe(client)
        .pipe(process.stdout);
})