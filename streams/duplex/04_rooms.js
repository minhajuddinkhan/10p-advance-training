globalCounter = 0;
globalConnections = {};
roomsConnections = {
  1: {},
  2: {},
  3: {}
}; //room ids : connections.
const net = require("net");

const broadCast = (connections, from, data) => {
  Object.keys(connections).forEach(conn => {
    if (conn != from) {
      connections[conn].write(data);
    }
  });
};

const handler = socket => {
  //   socket.setEncoding("utf-8");

  socket.id = globalCounter;
  // globalConnections[socket.id] = socket;
  globalCounter++;

  socket.write(
    `you are connected with id ${socket.id} \n Enter room id to join. \n`
  );

  socket.on("data", data => {
    try {
      if (socket.roomId) {
        broadCast(roomsConnections[socket.roomId], socket.id, data);
        return;
      }

      //chunk

      roomId = +data;

      if (roomsConnections[roomId]) {
        socket.roomId = roomId;
        const room = roomsConnections[roomId];
        room[socket.id] = socket;
        socket.write(`you are connected to room ${roomId} \n`);
        broadCast(room, socket.id, `${socket.id} has connected to this room.`);
      } else {
        socket.write("room does not exist");
      }
    } catch (ex) {
      socket.write("please enter an integer");
    }
  });
  socket.on("error", () => {});
  socket.on("end", () => {
    if (socket.roomId) {
      delete roomsConnections[roomId][socket.id];
      broadCast(
        roomsConnections[socket.roomId],
        socket.id,
        `${socket.id} has disconnected from this room \n`
      );
    }
  });
};
const tcpServer = net.createServer(handler);

tcpServer.listen(1337);
