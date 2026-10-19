const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("A");
  }, 3000);
}); // 3sec reject A

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("B");
  }, 2000);
}); // 2sec reject B
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("C");
  }, 1500);
}); // 1.5sec resolve C

const p = Promise.race([p1, p2, p3]);
console.log("start");
p.then((value) => {
  console.log(value); //
}).catch((e) => {
  console.log("Error", e);
});
