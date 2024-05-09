function MyComponent() {
  // 최상위 컴포넌트 사용하지 않을 때, 안하고 싶을때 (ex.div 가 너무 반복되는 거 같을 때)
  // fragment <></> 사용
  return (
    <>
      <p>Lorem ipsum dolor.</p>
      <p>Eaque, eos nostrum.</p>
    </>
  );
}

function MyComp() {
  // 최상위 컴포넌트는 1개 (필수!!)
  return (
    <div>
      <p>Lorem ipsum.</p>
      <p>Eveniet, magnam.</p>
    </div>
  );
}

function MyTag() {
  // jsx 코드가 여러 줄일 때 () 안에 코드 작성
  return (
    <div>
      hello tag
      <p>Lorem ipsum.</p>
      <p>Impedit, quam!</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <MyTag />
      <MyComp />
      <MyComponent />
    </div>
  );
}

export default App;
