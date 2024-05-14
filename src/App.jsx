import React, { useEffect, useState } from "react";

function App(props) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("mount 될 떄");
  }, []);
  useEffect(() => {
    console.log("count가 변경 때될 때");
    // dependency 가 코드실행문 안에 포함되어서 무한루프가 되지 않도록 주의!!
  }, [count]);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>click</button>
    </div>
  );
}

export default App;
