import React, { useState, useEffect } from "react";
import Clock from "./Clock";

function AppBai5() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <Clock time={time} />
    </div>
  );
}

export default AppBai5;
