const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Hello");
  }, 3000);
});

p.then((value) => {
  console.log(value);
})
  .finally(() => {
    console.log("End");
  })
  .catch((err) => {
    console.log("Error", err);
  });
