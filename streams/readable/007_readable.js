

readable = require('fs').createReadStream('./002_encoding.js', 'utf8');

readable.on('readable', () => {
    let chunk;
    while (null !== (chunk = readable.read(2))) {
      console.log(`Received ${chunk.length} bytes of data. i.e`, chunk);
    }
  });