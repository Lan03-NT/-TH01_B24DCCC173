import React from "react";
import AppBai1 from "./bai1/AppBai1";
import AppBai2 from "./bai2/AppBai2";
import AppBai3 from "./bai3/AppBai3";
import AppBai4 from "./bai4/AppBai4";
import AppBai5 from "./bai5/AppBai5";

function App() {
  return (
    <div>
      <h1>Bài 1: Ứng dụng Đếm số</h1>
      <AppBai1 />

      <hr />

      <h1>Bài 2: Danh sách công việc</h1>
      <AppBai2 />

      <hr />

      <h1>Bài 3: Ứng dụng đổi màu nền</h1>
      <AppBai3 />

      <hr />

      <h1>Bài 4: Thẻ thông tin sinh viên</h1>
      <AppBai4 />

      <hr />

      <h1>Bài 5: Đồng hồ</h1>
      <AppBai5 />
    </div>
  );
}

export default App;
