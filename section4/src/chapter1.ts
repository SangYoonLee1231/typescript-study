// 함수 타입 표현식과 호출 시그니쳐
// 함수의 타입을 별도로 정의하는 문법들

// 함수 타입 표현식 (Function Type Expression)
type Add = (a: number, b: number) => number;

const add: Add = (a, b) => a + b;

// 이 문법을 호출 시그니쳐 또는 함수 시그니쳐라고도 부르지만, 공식 문서에 적혀있는 정식 명칙은 '함수 타입 표현식'이다.

//

// 중복되는 함수 타입 표현식을 굉장히 깔끔하게 고칠 수 있는 방법

type Operation = (a: number, b: number) => number;

const add1: Operation = (a, b) => a - b;
const sub: Operation = (a, b) => a - b;
const multiply: Operation = (a, b) => a - b;
const divide: Operation = (a, b) => a - b;

const add1Copy: (a: number, b: number) => number = (a, b) => a + b;

//

// 호츨 시그니쳐
type Operation2 = {
  (a: number, b: number): number;
};

const add2: Operation2 = (a, b) => a - b;
const sub2: Operation2 = (a, b) => a - b;
const multiply2: Operation2 = (a, b) => a - b;
const divide2: Operation2 = (a, b) => a - b;

// 함수의 타입을 정의하는데 이렇게 중괄호를 열어서 마치 객체 타입을 정의하듯이 하는 이유는
// 사실 JavaScript의 함수도 객체이기 때문이다.

type Operation3 = {
  (a: number, b: number): number;
  name: string; // 하이브리드 타입
};
