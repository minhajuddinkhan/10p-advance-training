// lets read a file

const fs = require("fs")

const rs = fs.createReadStream("./003.js", "utf8");

rs.on("data", (chunk) => {
  console.log(chunk);
});

rs.on("end", () => {
  console.log("done reading from stream..");
});


rs.on("close", () => {
    console.log('read stream closed..')
})