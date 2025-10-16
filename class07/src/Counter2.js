import React, { useState } from "react";

function Counter2() {
  const [count, setCount] = useState(100);

  return (
    <div style={{ margin: "20px", textAlign: "center" }}>
      <h2>Counter 2: {count}</h2>
      <button onClick={() => setCount(count + 5)}>+5</button>
      <button onClick={() => setCount(count - 5)} style={{ marginLeft: "10px" }}>
        -5
      </button>
      <button onClick={() => setCount(100)} style={{ marginLeft: "10px" }}>
        Reset
      </button>
    </div>
  );
}

export default Counter2;
