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

  function handleClick3() {
    axios.get("/api/main42/sub3").then((param) => console.log(param.data));
  }

  function handleClick4() {
    axios.get("/api/main42/sub4").then((param) => console.log(param.data));
  }

  return (
    <div>
      <button onClick={handleClick1}>응답 받기 1</button>
      <br />
      {/* 버튼이 클릭되면 /api/main42/sub2 get 요청 후 응답 본문을 콘솔에 출력 */}
      <button onClick={handleClick2}>응답 받기 2</button>
      <br />
      <button onClick={handleClick3}>JSON 응답 받기 3 : 각 객체</button>
      <br />
      {/* /api/main42/sub4 get 요청 후 -> 응답 받은 내용 콘솔에 출력 */}
      <button onClick={handleClick4}>JSON 응답 받기 4</button>
    </div>
  );
}

export default App;
