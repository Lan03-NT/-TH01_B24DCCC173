import React from "react";
import TheSV from "./TheSV";

function AppBai4() {
  const students = [
    { id: 1, name: "Nguyễn Văn A", age: 20, class: "CNTT1" },
    { id: 2, name: "Trần Thị B", age: 21, class: "CNTT2" },
    { id: 3, name: "Lê Văn C", age: 19, class: "CNTT3" },
  ];

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      {students.map((stu) => (
        <TheSV
          key={stu.id}
          name={stu.name}
          age={stu.age}
          className={stu.class}
        />
      ))}
    </div>
  );
}

export default AppBai4;
