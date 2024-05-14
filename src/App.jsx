import React, { useEffect, useState } from "react";

function MyComp() {
  // useEffect : 특정 순간에 실행되는 메소드를 파라미터로 받음
  // 특정 순간이란?
  // 예) initial render 시, re-render,
  //     컴포넌트가 트리에서 떨어질 때, 어떤 state 가 바뀔 때
  // 첫번째 param : 실행되는 메소드
  // 두번째 param : 특정 순간(dependency)

  // 두번째 파라미터가 없을 때 -> redering 될 때 마다 실행
  useEffect(() => {
    console.log("rendering 될 떄 마다 실행");
  });
  // 두번째 파라미터에 빈 배열을 넣으면
  // initial rendering 때에만 실행
  useEffect(() => {
    console.log("첫 렌더링 때만 실행되는 메소드");
  }, []);

  // 첫번쨰 파라미터(함수)의 리턴은
  // unmount 될 때 실행
  useEffect(() => {
    return () => {
      console.log("언마운트 될 떄 실행되는 드메소드");
    };
  }, []);

  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");

  // 두번째 파라미터(배열)의 원소
  // 어떤 값(주로 state, dependency)이 바뀔 때
  useEffect(() => {
    console.log("dependency text1가 바뀔 때");
  }, [text1]);
  useEffect(() => {
    console.log("dependency text2가 바뀔 때");
  }, [text2]);
  useEffect(() => {
    console.log("text1 또는 text2가 파뀔 때");
  }, [text1, text2]);
  const [count, setCount] = useState(0);
  return (
    <div>
      hello comp
      <button onClick={() => setCount(count + 1)}>CLICK</button>
      <div>
        <input type="text" onChange={(e) => setText1(e.target.value)} />
      </div>
      <div>
        <input type="text" onChange={(e) => setText2(e.target.value)} />
      </div>
    </div>
  );
}

function App(props) {
  const [show, setShow] = useState(true);
  return (
    <div>
      <input
        type="checkbox"
        checked={show}
        onChange={(e) => setShow(e.target.checked)}
      />
      {show && <MyComp />}
    </div>
  );
}

export default App;
