console.log("B");
let x = 2;
export var y = 4;
const z = 20;

function sum(a, b) {
  return a + b;
}

const Main = (value) => {
  const el = document.createElement("h2");
  el.innerHTML = value;
  document.body.append(el);
};
export default Main;

export { z, sum };
