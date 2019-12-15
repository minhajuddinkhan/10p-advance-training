const p2 = new Promise(function(resolve, reject) {
  setTimeout(function() {
    reject(new Error('Uncaught Exception!'));
  });
});


p2.catch(function(e) {
  console.error("error", e);
});

const p3 = new Promise(function(resolve, reject) {
  resolve();
  throw new Error('Silenced Exception!');
});

p3.catch(function(e) {
   console.error(e); // This is never called
});