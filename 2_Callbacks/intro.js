let x = 2;
function sum(a, b, print) {
  let y = 4;

  let o = mul(a + y, b + x) + mul(b + y, a + x);

  print(o);
}

function mul(x, y) {
  return x * y;
}

function print(value) {
  console.log("Output is", value);
}

sum(3, 2, print);

// print is callback
//sum is high order function
