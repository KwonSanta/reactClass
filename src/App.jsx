import React from "react";

function App(props) {
  // function : 함수

  //--[1] 이름 있는 함수
  function action1(param1, param2) {
    // 명령문....
    return null;
  }

  //--[2] 이름 없는 함수
  const v = function (param1, param2) {
    return null;
  };

  //--[3] arrow function : =>
  // case1) 파라미터가 여러개, 명령문이 여러개
  const a = (param1, param2, param3) => {
    // 명령문1...
    // 명령문2...
  };

  // case2) 파라미터가 없고, 명령문이 여러개
  const b = () => {
    // 명령문1...
    // 명령문2...
    // ...
  };

  // case3) 파라미터가 한 개, 명령문이 여러개
  //        파라미터가 한 개일 때 () 안 써도됨...(하지만 prettier 가 붙여줌)
  const c = (param1) => {
    // 명령문들...
  };
  const d = (param1) => {
    // 명령문들...
  };

  // case4) 명령문이 하나일 때
  const e = () => {
    console.log("명령문이 하나인 arrow function");
  };
  const f = () => console.log("중괄호 생략 가능");
  const g = () => "중괄호 생략시 값이 리턴됨";
  const h = () => {
    return "g는 이 코드와 같은 실행 코드임";
  };
  //--[4] 함수 실행
  action1(null, null);
  v(null, null);
  a(null, null, null);

  return <div></div>;
}

export default App;
