// infer - 조건부 타입 내에서 타입 추론하기
// inference -> 추론하다

type FuncA = () => string;
// 이 Func 타입의 반환값에 해당하는 타입만 가져오려면 어떻게 해야할까?

type ReturnType<T> = T extends () => infer R ? R : never;

type A = ReturnType<FuncA>; // string (R은 string으로 추론)

// 다른 예시를 보자
type FuncB = () => number;

type B = ReturnType<FuncB>; // number (R은 number으로 추론)

// () => infer R은 T extends () => infer R이 참이 되도록
// R이 자동으로 추론된다.

type C = ReturnType<number>; // never (R은 추론이 불가)

//

// 다른 예제

type PromiseUnpack<T> = T extends Promise<infer R> ? R : never;
// < 요구 사항 >
// 1. T는 프로미스 타입이어야 한다.
// 2. 프로미스 타입의 결과값 타입을 반환해야 한다.

type PromiseA = PromiseUnpack<Promise<number>>; // numebr (R은 number)
type PromiseB = PromiseUnpack<Promise<string>>; // string (R은 string)
