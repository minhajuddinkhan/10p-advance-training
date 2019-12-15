try {
  new Promise(() => {
    throw new Error("error!");
  })
  .catch()
}
catch (err) {
  console.error("asdsd");
}


setTimeout(() => {
  console.log("asd");
},5000)