const asyncFunction = data => {
  return Promise.resolve();
};

const promise = asyncFunction("value1")
  .then(value => {
    console.log(value);
    return "value2";
  })
  .then(() => 5)


  console.log()



console.log(promise)
