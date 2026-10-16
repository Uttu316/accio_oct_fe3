console.log("A");

setTimeout(() => {
  console.log("B");
}, 2000);
setTimeout(() => {
  console.log("C");
}, 1000);
setTimeout(() => {
  console.log("D");
}, 200);
setTimeout(() => {
  console.log("E");
}, 1500);
setTimeout(() => {
  console.log("F");
}, 1000);
setTimeout(() => {
  console.log("G");
}, 200);
setTimeout(() => {
  console.log("H");
}, 0);
setTimeout(() => {
  console.log("I");
});
console.log("End");
