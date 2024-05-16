import React from "react";
import axios from "axios";

function App(props) {
  function handleClick1() {
    axios.get("/api/main42/sub1").then((param) => console.log(param.data));
    // then() 의 파라미터 = 함수(익명,기명,arrow 다 가능)
    //
  }

  function handleClick2() {
    // axios.get("/api/main42/sub2").then((param) => console.log(param.data));
    axios.get("/api/main42/sub2").then(function (param) {
      console.log(param.data);
    });
  }

  return (
    <div>
      <button onClick={handleClick1}>응답 받기</button>
      <br />
      {/* 버튼이 클릭되면 /api/main42/sub2 get 요청 후 응답 본문을 콘솔에 출력 */}
      <button onClick={handleClick2}>응답 받기</button>
    </div>
  );
}

export default App;
