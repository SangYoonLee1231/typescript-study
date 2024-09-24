// 배열
let numArr = [1, 2, 3];
let strArr = ["hello", "hi", "annyoung"];
let boolArr = [true, false, true]; // 제네릭 문법
// 배열에 들어가는 요소들의 타입이 다양할 경우
let multiArr = [1, "hello"]; // 유니온 타입
// 다차원 배열의 타입을 정의하는 방법
let doubleArr = [
    [1, 2, 3],
    [4, 5],
];
// 튜플 (TS에서만 제공)
let tup1 = [1, 2];
// tup1 = [1, 2, 3];
// tup1 = ["1", "2"];
let tup2 = [1, "2", true];
// 튜플은 사실 배열이다.
tup1.push(1);
tup1.pop();
tup1.pop();
tup1.pop();
// 배열 메소드를 사용할 때는 길이 제한이 발생하지 않는다.
// 그렇기 때문에 각별히 주의해서 사용해야 한다.
// 튜플이 유용한 경우 예시
const users = [
    ["이아무개", 1],
    ["김아무개", 2],
    ["박아무개", 3],
    [4, "윤아무개"], // 잘못
];
const usersCopy = [
    ["이아무개", 1],
    ["김아무개", 2],
    ["박아무개", 3],
    //[4, "윤아무개"], // 잘못된 요소에 오류 발생!
];
export {};
// 인덱스 위치에 따라 넣어야 할 값이 정해져 있을 때 튜플을 이용하면 오류를 방지할 수 있다.
