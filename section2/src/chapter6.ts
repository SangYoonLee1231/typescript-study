// any
// 특정 변수의 타입을 확실히 모를 때 사용할 수 있는 타입

let anyVar: any = 10;
anyVar = "hello";

anyVar = true;
anyVar = {};
anyVar = () => {};

anyVar.toUpperCase();
anyVar.tofixed();

let num: number = 10;
num = anyVar;

// 다만 any 타입을 사용한다는 것은 TS의 이점을 다 포기하는 것이므로 가능한 사용하지 않는 편이 좋다.

//

// unknown
let unknownVar: unknown;
unknownVar = "";
unknownVar = 1;
unknownVar = () => {};

if (typeof unknownVar == "number") {
  num = unknownVar;
}

// unknown은 any처럼 모든 값을 다 할당받을 순 있지만, any와 다르게 그 반대는 허용되지 않는다.
// unknown 타입은 any 타입보다는 안전하다.
