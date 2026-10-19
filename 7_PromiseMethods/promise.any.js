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
    reject("C");
  }, 1500);
}); // 1.5sec reject C

const p = Promise.any([p1, p2, p3]);
console.log("start");
p.then((value) => {
  console.log(value); //
}).catch((e) => {
  console.log("Error", e);
});
