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
export {};
