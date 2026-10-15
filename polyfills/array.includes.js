//check for incompatibility
if (!Array.prototype.includes) {
  //polyfill for includes
  Array.prototype.includes = function (target) {
    let arr = this; //get the current array
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        return true;
      }
    }
    return false;
  };
}

let array = ["A", "B", "C", "D", "E", "F"];

const ans = array.includes("A"); //inbuilt

console.log(ans);
