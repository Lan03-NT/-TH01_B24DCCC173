import React, { useState } from "react";

function TheSV({ name, age, className }) {
  const [showDetail, setShowDetail] = useState(false);

  return (
    <div
      style={{
        border: "1px solid black",
        padding: "10px",
        margin: "10px auto",
        width: "250px",
        borderRadius: "8px",
        backgroundColor: "#f9f9f9",
      }}
    >
      <h3>{name}</h3>

      <button
        onClick={() => setShowDetail(!showDetail)}
        style={{ marginBottom: "10px" }}
      >
        {showDetail ? "Ẩn chi tiết" : "Xem chi tiết"}
      </button>

      {showDetail && (
        <p>
          Tuổi: {age} - Lớp: {className}
        </p>
      )}
    </div>
  );
}

export default TheSV;
