//write a polyfill to get all even numbers from an array

Array.prototype.evens = function () {
  let arr = this;

  if (!arr || (arr && !arr.length)) return [];

  let output = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      output.push(arr[i]);
    }
  }
  return output;
};

let array = [2, 3, 5, 4, 6, 5, 7, 8, 23, 4, 654, 34, 54, 65, 76, 87, 78];

let ans = array.evens(); //return all even numbers in an array
console.log(ans);
