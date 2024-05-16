import React from "react";

function App(props) {
  // JSON (javaScript Object Notation(표기법))
  // JavaScript 객체(Object) 작성법을 빌린
  // Text(문자열) 형식의 데이터

  // JSON 데이터 타입
  // 문자열, 수, 불리언, 객체, 배열, null

  // JSON 의 프로퍼티명은 큰 따옴표로 묶음

  //--[1] 직렬화(serialization, stringify, encode) :  객체 -> JSON (문자열)
  //--[2] 역직렬화(parse, decode) : JSON -> 객체

  //--[1] 직렬화 예)
  const obj1 = { name: "son", age: 33 };
  const json1 = `{ "name": "son", "age": 33 }`; // 수동 방법

  const obj2 = { name: "son", age: 33 };
  const json2 = JSON.stringify(obj2); // 메소드 사용 방법 : 직렬화
  console.log("obj2", obj2);
  console.log("json2", json2);

  return <div></div>;
}

export default App;
