const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("A");
  }, 3000);
}); // 3sec resolve A

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("B");
  }, 2000);
}); // 2sec resolve B
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("C");
  }, 1500);
}); // 1.5sec resolve C

const p = Promise.all([p1, p2, p3]);
console.log("start");
p.then((value) => {
  console.log(value); //
}).catch((e) => {
  console.log("Error", e);
});
