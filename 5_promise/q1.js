console.log("A");

const p = new Promise((resolve, reject) => {
  console.log("B");
  setTimeout(() => {
    if ("A" < "B") {
      resolve("Big");
    } else {
      reject("Small");
    }
    console.log("C");
  }, 3000);
  console.log("D");
});
console.log("E");
p.finally(() => {
  console.log("Done");
})
  .then((value) => {
    console.log(value);
  })
  .catch((e) => {
    console.log("Error", e);
  });
console.log("End");
