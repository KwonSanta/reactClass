import React from "react";

function App(props) {
  const a = ["흥민", "강인", "희찬"];
  const b = a.map(function (item) {
    return item + "선수";
  });
  const c = a.map(function (item) {
    return <li>{item}</li>;
  });
  return (
    <div>
      <div>{a}</div>
      <div>
        {a[0]}
        {a[1]}
        {a[2]}
      </div>
      <div>{b}</div>
      <div>{c}</div>
      <div>
        {" "}
        {/* 축약 1.*/}
        {a.map(function (item) {
          return <li>{item}</li>;
        })}
      </div>
      <div>
        {/* 축약 2. */}
        {/* element 가 component 로 mapping 될 수 있고 자주 일어나는 일이다. */}
        {a.map((item) => (
          <li>{item} 선수</li>
        ))}
      </div>
    </div>
  );
}

export default App;
