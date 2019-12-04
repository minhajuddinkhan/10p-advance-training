const EventEmitter = require("events");

const eventEmitter = new EventEmitter();

eventEmitter.on("first", () => {
  console.log("hey1");
});

eventEmitter.on("first", () => {
  console.log("hey2");
});

eventEmitter.emit("first");
