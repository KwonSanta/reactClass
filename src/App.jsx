import React from "react";
import { action1, action2, action3, MyComp as YourComp } from "./MyComps.jsx";
import { HereComp } from "./HereComp.jsx";

function App(props) {
  action1();
  action2();
  action3();
  return (
    <div>
      <YourComp />
      <HereComp />
    </div>
  );
}

export default App;
