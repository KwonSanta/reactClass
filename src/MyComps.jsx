export const myStr = "korea";
export const myAddress = "seoul";
export const value3 = 99;
const value4 = {};
const value5 = [];

// 이름 있는 함수
export function action1() {
  return null;
}
// 이름 없는 함수
export const action2 = function () {
  return null;
};
// arrow function
export const action3 = () => null;

export function MyComp() {
  return <div>Lorem.</div>;
}
