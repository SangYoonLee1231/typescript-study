// 제네릭

// 제네릭 함수
function func<T>(value: T): T {
  return value;
} // <T>: 타입을 저장하는 변수. '타입 변수'라 부름. 인수의 타입에 따라 결정

// 우리가 원하는 대로 함수의 인수에 따라서 반환값의 타입을 가변적으로 정해줄 수 있다.
// 마치 함수계의 종합병원

let num = func(10);

let boolean = func(true);

let str = func("string");

let arr = func([1, 2, 3]);

let arr2 = func<[number, number, number]>([1, 2, 3]);
// 배열을 튜플 타입으로 전달하고 싶을 때
