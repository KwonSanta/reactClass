import React from "react";
import axios from "axios";

function App(props) {
  function handleClickButton1() {
    // ajax get 요청
    // /api 를 붙이는 이유 :
    // 현재 5173 port 에서 react 를 돌리고 있고, spring 은 8080으로 돌리는데 두개의 포트를 연결하기 위해
    axios.get("/api/someurl");
  }

  function handleClickButton2() {
    // ajax post 요청
    axios.post("/api/someurl");
  }

  return (
    <div>
      <button onClick={handleClickButton1}>get 요청</button>
      <button onClick={handleClickButton2}>post 요청</button>
    </div>
  );
}

export default App;
