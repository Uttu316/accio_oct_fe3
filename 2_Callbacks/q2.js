console.log("A");
function getData(username, onSuccess, onFailure) {
  console.log("B");
  if (username.indexof("A")) {
    onSuccess({
      name: "ABC XYZ",
      city: "Delhi",
    });
  } else {
    onFailure("Oops");
  }
  console.log("C");
}

getData(
  "Abc",
  (value) => {
    console.log(value);
  },
  (err) => {
    console.log("Error", err);
  },
);
console.log("End");
