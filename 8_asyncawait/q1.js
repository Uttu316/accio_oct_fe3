console.log("A");
function api(input = 1) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (input <= 4) {
        resolve(2 * input);
      } else {
        reject("Oops");
      }
    }, 3000);
  });
}
async function getData() {
  console.log("B");
  try {
    const res = await api();
    console.log(res);
    const res2 = await api(res);
    console.log(res2);
    const res3 = await api(res2);
    console.log(res3);
    const res4 = await api(res3);
  } catch (e) {
    console.log("Error", e);
  }
}
console.log("C");
getData();
console.log("D");
