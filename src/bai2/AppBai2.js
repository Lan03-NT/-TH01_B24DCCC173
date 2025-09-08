import React, { useState } from "react";
import CongViec from "./CongViec";

function AppBai2() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  const handleAdd = () => {
    if (task.trim() !== "") {
      setTaskList([...taskList, task]);
      setTask("");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h2>Nhập công việc</h2>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Nhập công việc..."
      />
      <button onClick={handleAdd}>Thêm</button>

      <ul style={{ listStyle: "none", padding: 0, marginTop: "20px" }}>
        {taskList.map((cv, index) => (
          <CongViec key={index} text={cv} />
        ))}
      </ul>
    </div>
  );
}

export default AppBai2;
