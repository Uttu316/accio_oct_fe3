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

//Todo:
// let array = [2,3,5,4,6,5,7,8,23,4,654,34,54,65,76,87,78]

array.evens(); //return all even numbers in an array
