import React, { useState, useMemo, useCallback } from "react";
import ChildButton from "./components/ChildButton";

function UseMemoAndCallbackExample() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // Simulated expensive calculation
  const expensiveCalculation = (num) => {
    console.log("Running expensive calculation...");
    for (let i = 0; i < 1000000000; i++) {} // heavy work simulation
    return num * 2;
  };

  // useMemo -> memoize calculated value
  const doubledValue = useMemo(() => expensiveCalculation(count), [count]);

  // useCallback -> memoize function
  const handleIncrement = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>useMemo and useCallback Example</h2>

      <p>Count: {count}</p>
      <p>Expensive (Memoized) Value: {doubledValue}</p>

      <ChildButton onClick={handleIncrement} />

      <div style={{ marginTop: "20px" }}>
        <input
          type="text"
          placeholder="Type something..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={{ padding: "5px", width: "200px" }}
        />
        <p>Text: {text}</p>
      </div>
    </div>
  );
}

export default UseMemoAndCallbackExample;
