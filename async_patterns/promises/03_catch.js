const p1 = new Promise(function(resolve, reject) {
  resolve('Success');
});

// p1
// .then(function(value) {
//   console.log(value); // "Success!"
//   throw new Error('oh, no!');
// })
// .then(function(){
//   console.log('after a catch the chain is restored');
// }, function () {
//   console.log('Not fired due to the catch');
// });

p1.then(function(value) {
  console.log(value); // "Success!"
  return Promise.reject('oh, no!');
})
.then(function(){
  console.log('after a catch the chain is restored');
}, function () {
  console.log('Not fired due to the catch');
  return Promise.reject(6);
})
.then(function(data){
  console.log('after a catch the chain is restored', data);
})
.catch(function(e) {
  console.error(e); // "oh, no!"
  return 3;
})