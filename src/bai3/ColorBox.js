import React from "react";

function ColorBox({ color }) {
  return (
    <div
      style={{
        width: "200px",
        height: "200px",
        backgroundColor: color,
        margin: "20px auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        fontWeight: "bold",
        border: "2px solid black",
      }}
    >
      Màu hiện tại: {color}
    </div>
  );
}

export default ColorBox;
