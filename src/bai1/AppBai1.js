import React, { useState } from "react";
import HienThiSo from "./HienThiSo";

function AppBai1() {
  const [count, setCount] = useState(0); // state lưu số hiện tại

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <HienThiSo value={count} />

      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

export default AppBai1;
