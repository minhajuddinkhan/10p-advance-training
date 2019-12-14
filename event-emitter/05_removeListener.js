class MyEmitter extends require("events") {}

const myEmitter = new MyEmitter();
// Only do this once so we don't loop forever
myEmitter.on("newListener", (event, listener) => {
  console.log("event registerred!", event);
  if (event === "someEvent") {
    setTimeout(() => {
      myEmitter.removeListener(event, listener);
    }, 2000);
  }
});


myEmitter.on("someEvent", e => {
    console.log("received!")
});
myEmitter.on("someOtherEvent", (e) => {
  console.log("received TWO!");
})
myEmitter.emit("someEvent");
setInterval(() => {
  myEmitter.emit("someEvent");
  myEmitter.emit("someOtherEvent")
}, 500);
