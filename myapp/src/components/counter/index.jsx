import { useState } from "react";

const Counter = () => {
  const [x, setX] = useState(0);

  const onAdd = () => {
    setX(x + 1);
    setX(x + 1);
    setX(x + 1);
    console.log("Add", x);
  };
  const onMinus = () => {
    setX((x) => x - 1);
    setX((x) => x - 1);
    setX((x) => x - 1);
    console.log("Minus", x);
  };

  return (
    <div>
      <h2>Counter</h2>
      <h3>{x}</h3>
      <div>
        <button onClick={onAdd}>Add</button>
        <button onClick={onMinus}>Minus</button>
      </div>
    </div>
  );
};

export default Counter;
