const httpRequest = uri => {
  return new Promise(resolve => {
    setTimeout(() => {
      const data = `data for ${uri}`;
      return resolve(data);
    }, Math.random() * 10000);
  });
};

const downloadFile = uri => {
  return httpRequest(uri);
};

const p1 = downloadFile("file1");
const p2 = downloadFile("file2");
const p3 = downloadFile("file3");

p1
.then((response) => {
  console.log(response);
  return p2;
})
.then((response) => {
  console.log(response);
  return p3;
})
.then((response) => {
  console.log(response);
  console.log("finished");
})
