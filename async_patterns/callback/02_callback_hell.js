setTimeout(() => {
  console.log("first");
  setTimeout(() => {
    console.log("second");
    setTimeout(() => {
      console.log("third");
    }, 1000);
  }, 1000);
}, 1000);
