const promise1 = Promise.resolve(3);
const promise2 = Promise.reject(42);
const promise3 = new Promise(function(resolve, reject) {
  setTimeout(resolve, 100, 'foo');
});

Promise.all([promise1, promise2, promise3])
.then(function(values) {
  console.log(values);
}).catch(err => {
  console.log(err);
})


console.log("S")