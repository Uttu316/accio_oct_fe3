function api() {
  return new Promise((resolve, reject) => {
    console.log("Fetching API");
    setTimeout(() => {
      reject("Accio");
    }, 3000);
  });
}

async function getData() {
  console.log("Get user data");
  try {
    const user = await api();
    console.log(user);
  } catch (e) {
    console.log("Error", e);
  }
}

console.log("Start");
getData();
console.log("Other Task");
