


globalCounter = 0;
globalConnections = {};

const net = require('net');
const handler = (socket) => {

    socket.setEncoding('utf-8');

    socket.id = globalCounter;
    globalConnections[socket.id] = socket;
    globalCounter++;


    socket.write(`you are connected with id ${socket.id} \n`);

    socket.on('data', (data) => {
        Object.keys(globalConnections).forEach(conn => {
            if(conn != socket.id) {
                globalConnections[conn].write(data);
            }
        })
    })
    socket.on('end', () => {
        Object.keys(globalConnections).forEach(conn => {
            if(conn != socket.id) {
                globalConnections[conn].write(`${socket.id} disconnected.`);
            }
        })
    })
}
const tcpServer = net.createServer(handler);

tcpServer.listen(8080);