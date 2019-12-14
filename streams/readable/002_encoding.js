// Example of streams to setEncoding to utf8 so we can see better


process.stdin.setEncoding('utf8')
process.stdin.on('data', console.log)

