// lets read a file

const fs = require("fs")


// 1. Synchronously.
// 2. Async
// 3. Via Streams

const rs = fs.createReadStream("./003", "utf8");

rs.on("data", (chunk) => {
  console.log(chunk);
});

rs.on("end", () => {
  console.log("done reading from stream..");
});
