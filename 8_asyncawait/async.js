function getUserData() {
  return new Promise((resolve, reject) => {
    resolve("hello");
  });
}

async function getData() {
  // return "bye" // resolved value of promise
  throw "oops"; // reject the error of promise
}
getUserData().then((value) => {
  console.log(value);
});

getData()
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.log("Error", err);
  });
