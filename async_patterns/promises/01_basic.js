const p1 = new Promise((resolve, reject) => {
  setTimeout(resolve,1000);
});

console.log(p1)

p1.then((d) => console.log(d));
p1.then(console.log);
p1.then(console.log);