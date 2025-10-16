import React from "react";

const ChildButton = React.memo(({ onClick }) => {
  console.log("ChildButton rendered");
  return (
    <button onClick={onClick} style={{ marginTop: "10px" }}>
      Increase Count (Child)
    </button>
  );
});

export default ChildButton;
