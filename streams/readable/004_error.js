//will throw an error event on the stream;


// lets read a file

const fs = require("fs")
const rs = fs.createReadStream("./002_encoding.js", "utf8");
rs.setEncoding('utf8');

rs.on("data", (chunk) => {
  console.log(chunk);
});

rs.on('data', (chunk) => {
  console.log(chunk.toUpperCase())
})
