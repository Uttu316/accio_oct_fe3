console.log("A");

function Abc(x, y, callback) {
  console.log("B");

  const o = callback(x, y) + callback(y, x);
  const r = print(o);
  console.log(r);
}

function sum(a, b) {
  console.log("C");
  return a + b;
}

function print(value) {
  console.log("D");
  return "Output is " + value;
}
console.log("E");
Abc(4, -2, sum);
console.log("F");
