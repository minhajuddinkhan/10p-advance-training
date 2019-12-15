const httpRequest = (uri, callback) => {
  setTimeout(() => {
    const data = `data for ${uri}`;
    callback(data);
  }, Math.random() * 10000);
};

const responses = {};

const downloadFile = uri => {
  httpRequest(uri, response => {
    fileReceived(uri, response);
  });
};

const fileReceived = (file, text) => {
  // haven't received this text yet?
  if (!responses[file]) {
    responses[file] = text;
  }

  const fileSequence = ["file1", "file2", "file3"];

  // loop through responses in order for rendering
  for (file of fileSequence) {
    // response received?
    if (file in responses) {
      // response needs to be rendered?
      if (responses[file] !== true) {
        console.log(responses[file]);
        responses[file] = true;
      }
    }
    // can't render yet
    else {
      // not complete!
      return false;
    }
  }

  console.log("Complete!");
};
downloadFile("file1");
downloadFile("file2");
downloadFile("file3");
