import React from "react";
import "./App.css";
import Counter1 from "./Counter1";
import Counter2 from "./Counter2";

function App() {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Two Counters Example</h1>
      <Counter1 />
      <Counter2 />
    </>
  );
}

export default App;
