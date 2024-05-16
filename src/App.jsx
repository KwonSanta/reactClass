import React from "react";
import axios from "axios";

function App(props) {
  // json 데이터 타입
  // 문자열, 수, 불리언, 객체, 배열, null

  function handleClick1() {
    const data = {
      name: "son", // 문자열
      age: 33, // 수
      married: false, // boolean
      team: {
        // 객체
        location: "london",
        name: "토트넘",
      },
      item: ["phone", "shoes", "shirts"], // 배열
      address: null, // null
    };
    axios.post("/api/main41/sub5", data);
  }

  function handleClick2() {
    axios.post("/api/main41/sub6", {
      name: "son",
      age: 33,
    });
  }

  return (
    <div>
      <button onClick={handleClick1}>json 데이터와 요청</button>
      <br />
      <button onClick={handleClick2}>json 데이터와 요청</button>
    </div>
  );
}

export default App;
