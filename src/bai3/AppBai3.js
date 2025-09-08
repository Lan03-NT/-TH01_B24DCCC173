import React, { useState } from "react";
import ColorBox from "./ColorBox";

function AppBai3() {
  const [color, setColor] = useState("red");

  return (
    <div style={{ textAlign: "center" }}>
      {["red", "green", "blue", "yellow"].map((c) => (
        <button
          key={c}
          onClick={() => setColor(c)}
          style={{ margin: "5px", padding: "5px 10px" }}
        >
          {c}
        </button>
      ))}
      <ColorBox color={color} /> {}
    </div>
  );
}

export default AppBai3;
