const net = require("net");

let globalCounter = 0;
let connectionPool = {};

//1. maintain an array.
//2. dictionary. socket ids => socket connections.

const handler = socket => {

  socket.id = globalCounter;
  connectionPool[socket.id] = socket;
  globalCounter++;

  socket.write(`you have been assigned id ${socket.id}`)
  
  socket.on("data", chunk => {
    
    //loop over your connection pool.
    Object.keys(connectionPool).forEach((connectionId) => {
        if(connectionId != socket.id) {
            connectionPool[connectionId].write(`${chunk} - sent by ${socket.id}`);
        }
    })

    //what do i write here?
    // socket.write(chunk);
  });

  //Socket disconnection handling..
  socket.on('end', () => {
      console.log('socket disconnected...');
  })

  socket.on('close', () => {
      console.log('closing socket descriptor...')
  })

  socket.on('error', (err) => {
    //   console.log("ERR?", err)
  })


};

const server = net.createServer(handler);
server.listen(1337, () => {
  console.log("listening to port 1337");
});

//telnet localhost 8080
