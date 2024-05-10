import React from "react";

function App(props) {
  // destructuring assignment
  const person = {
    name: "John",
    email: "john@example.com",
    address: "127.0.0.1",
  };
  const { name, email } = person;
  console.log("name", name);
  console.log("email", email);

  const car = {
    model: "genesis",
    company: "hyundai",
    price: 500,
  };
  const { model, company, color = "black" } = car;
  console.log("model", model);
  console.log("company", company);
  console.log("color", color);

  const house = {
    city: "seoul",
    country: "USA",
  };
  const { city, country = "korea", area = 987 } = house;
  console.log("city", city);
  console.log("country", country);
  console.log("area", area);

  return <div></div>;
}

export default App;
