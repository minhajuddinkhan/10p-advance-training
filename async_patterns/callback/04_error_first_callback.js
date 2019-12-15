const ajax = (url, callback) => {
  const data = "<h> some data </h>";
  setTimeout(() => {
    callback(null, data);
  }, 1000);
};

const response = (err, data) => {
  if (err) {
    console.error(err);
  } else {
    console.log(data);
  }
};

ajax("http://someurl", response);
