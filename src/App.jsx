import React from "react";

function App(props) {
  return (
    <div>
      <button
        onMouseLeave={() => console.log("mouse leaved")}
        onMouseEnter={() => console.log("mouse entered")}
        onClick={() => console.log("clicked")}
      >
        클릭1
      </button>
      <input type="text" onChange={() => console.log("changed")} />
    </div>
  );
}

export default App;
