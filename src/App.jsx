import React from "react";

function MyComp(props) {
  return <div></div>;
}
function App(props) {
  // props 의 이름은 lowerCamelCase 로 작성
  // 예약어를 쓰지 말 것
  return (
    <div>
      <label htmlFor="input1"></label>
      <input id="input1" type="text" />
      <MyComp number={3} pageNumber={3} />
    </div>
  );
}

export default App;
