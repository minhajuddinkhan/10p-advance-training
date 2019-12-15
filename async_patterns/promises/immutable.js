

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("i ran!")
    resolve("value1");
    resolve("value2");
  },100);
})


p1.then(console.log)
p1.then(console.log)
