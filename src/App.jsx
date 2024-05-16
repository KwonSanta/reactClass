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

  function handleClickButton3() {
    axios.get("/api/someurl2");
  }

  function handleClickButton4() {
    axios.post("/api/someurl2");
  }

  function handleClickButton5() {
    // 간단한 것들은 직접 url을 명시해줘도 됨 (ex. /api/someurl3?id=xx&name=xx)
    const params = new URLSearchParams();
    params.append("id", 3);
    params.append("name", "son");
    params.append("email", "son@son.com");
    // 방법 1
    // axios.get("/api/someurl3?" + params);
    // 방법 2
    axios.get(`/api/someurl3?${params}`);
  }

  return (
    <div>
      <button onClick={handleClickButton1}>get 요청</button>
      <button onClick={handleClickButton2}>post 요청</button>
      {/* todo : /api/someurl2 get, post 요청 보내기 */}
      <button onClick={handleClickButton3}>get 요청2</button>
      <button onClick={handleClickButton4}>post 요청2</button>

      <button onClick={handleClickButton5}>get 요청 with queryString</button>
    </div>
  );
}

export default App;
