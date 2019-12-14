class MyEmitter extends require("events") {}

const myEmitter = new MyEmitter();
// Only do this once so we don't loop forever
myEmitter.on("newListener", (event) => {
  console.log("event registered!", event);
});

