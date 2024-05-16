import React, { useState } from "react";
import axios from "axios";

function App(props) {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");

  function handleClick1() {
    // json 은 post 방식으로만
    const obj1 = { name: "son", age: 44 };
    // const json1 = JSON.stringify(obj1); <- 이 작업이 없이 바로 obj1로 넣어도 직렬화를 작업해서 넣어줌
    // axios 의 두번째 파라미터가 객체면 직렬화 해줌
    axios.post("/api/main41/sub1", obj1);
  }

  function handleClick2() {
    const obj2 = {
      name: "lee",
      age: 23,
      // car: { carName: "model-3", carCompany: "tesla", carPrice: 6000 },
      foods: ["apple", "banana", "pear"],
    };
    axios.post("/api/main41/sub2", obj2);
  }

  function handleClick3() {
    // 변수명=프로퍼티명 -> 생략가능
    // const data = {
    //   name : name,
    //   city : city
    // }
    // const data = {
    //   name ,
    //   city
    // }
    axios.post("/api/main41/sub3", { name, city });
  }

  return (
    <div>
      <button onClick={handleClick1}>요청 (json 데이터 포함)</button>
      {/* todo : /api/main41/sub2 post with json data */}
      <button onClick={handleClick2}>요청 (json 데이터 포함)</button>
      <div>
        <input type="text" onChange={(e) => setName(e.target.value)} />
        <br />
        <input type="text" onChange={(e) => setCity(e.target.value)} />
        <br />
        <button onClick={handleClick3}>요청 (input에 입력한 값)</button>
      </div>
    </div>
  );
}

export default App;
