import React from "react";

function Clock({ time }) {
  const formattedTime = time.toLocaleTimeString("en-GB");

  return (
    <div
      style={{
        fontSize: "2rem",
        fontWeight: "bold",
        padding: "10px",
        border: "2px solid black",
        display: "inline-block",
        borderRadius: "10px",
        backgroundColor: "#f0f0f0",
      }}
    >
      {formattedTime}
    </div>
  );
}

export default Clock;
