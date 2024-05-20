import React from "react";

function App(props) {
  return (
    <div>
      <form action="/path" method="POST" encType="multipart/form-data">
        이름 <input type="text" name="name" />
        <br />
        <input type="file" name="file" id="" />
        <br />
        <input type="submit" value="제출" />
      </form>
    </div>
  );
}

export default App;
