import React, { useState } from "react";

function App(props) {
  const [text, setText] = useState("");

  function handleUpdateText(e) {
    // console.log(event.target.value);
    setText(e.target.value);
  }

  return (
    <div>
      <input onChange={handleUpdateText} type="text" />
      <p>{text}</p>
    </div>
  );
}

export default App;
