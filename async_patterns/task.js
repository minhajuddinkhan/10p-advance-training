/*
 * Exercise credit goes to Kyle Simpson, author of the popular book "You Don't Know JS".
 * --------------------------------------------------------------------------------------
 * Expected behavior:
 *	- Request all 3 files at the same time (in "parallel").
 *	- Render them ASAP (don't just blindly wait for all to finish loading)
 *	- BUT, render them in proper (obvious) order: "file1", "file2", "file3".
 *	- After all 3 are done, output "Complete!".
 */

const httpRequest = (uri, callback) => {
  setTimeout(() => {
    const data = `data for ${uri}`;
    callback(data);
  }, Math.random() * 10000);
};

const downloadFile = uri => {
  httpRequest(uri, response => {
      // do something
  });
};


downloadFile("file1");
downloadFile("file2");
downloadFile("file3");