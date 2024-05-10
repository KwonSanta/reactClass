import React from "react";

function App(props) {
  // object ({}, [])
  // 나머지 모두 (rest property)
  // 문법 : ...변수명

  const a = {
    name: "John",
    email: "john@example.com",
    password: "password",
    address: "address",
  };

  const { name, email, ...b } = a;
  console.log("name", name);
  console.log("email", email);
  console.log("b.password", b.password); // "password"
  console.log("b.address", b.address); // "address"

  // 연습
  const c = {
    city: "seoul",
    country: "US",
    price: 500,
    category: "food",
  };
  const { price, ...d } = c;
  console.log("price", price); // 500
  console.log("d.city", d.city); // "seoul"
  console.log("d.country", d.country); // "US"
  console.log("d.category", d.category); // "food"

  return <div></div>;
}

export default App;
