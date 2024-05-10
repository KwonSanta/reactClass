import React from "react";

function App(props) {
  // 나머지 모두 문법으로 객체 복사
  const a = {
    name: "son",
    age: 33,
    city: "london",
  };
  const b = a; // a와 b는 같은 객체 참조
  b.age = 44;
  console.log("a.age", a.age); // 44
  console.log("b.age", b.age); // 44

  // 구조분해할당 도움이 없었다면 아래의 코드 필요
  const c = {
    name: a.name,
    age: a.age,
    city: a.city,
  };
  c.age = 55;
  console.log("c.age", c.age); // 55
  console.log("a.age", a.age); // 44

  // 구조분해할당 사용
  // 객체의 각 프로퍼티를 복사
  const { ...d } = a;
  d.age = 66;
  console.log("d.age", d.age); // 66
  console.log("a.age", a.age); // 44

  // 연습
  const e = {
    name: "lee",
    country: "korea",
    team: "paris",
    salary: 700,
    city: "seoul",
  };
  const { ...f } = e;
  e.city = "busan";
  console.log(e);
  console.log(f);
  return <div></div>;
}

export default App;
