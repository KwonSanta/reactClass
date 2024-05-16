import React from "react";
import axios from "axios";

function App(props) {
  function handleClick1() {
    // json 은 post 방식으로만
    const obj1 = { name: "son", age: 44 };
    // const json1 = JSON.stringify(obj1); <- 이 작업이 없이 바로 obj1로 넣어도 직렬화를 작업해서 넣어줌
    // axios 의 두번째 파라미터가 객체면 직렬화 해줌
    axios.post("/api/main41/sub1", obj1);
  }

  return (
    <div>
      <button onClick={handleClick1}>요청 (json 데이터 포함)</button>
    </div>
  );
}

export default App;
