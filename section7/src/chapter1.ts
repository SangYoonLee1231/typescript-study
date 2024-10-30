// 타입 변수 응용하기

// 첫 번째 사례
function swap<T, U>(a: T, b: U) {
  return [b, a];
}

const [a, b] = swap("1", 2);

// 타입 변수를 여러 개 선언해서 사용할 수 잇다.

//

// 두 번째 사례
function returnFirstValue<T>(data: T[]) {
  return data[0];
  // T 자체는 unknown 타입으로 추론
}

let num = returnFirstValue([0, 1, 2]); // 0
let str = returnFirstValue(["Hello", "my", "name", "is"]); // Hello

// 이런 식으로 타입 변수를 매개변수에 그대로 갖다가 쓸 필요 없이 배열 타입과 함께 쓸 수도 있다.

//

// 두 번째 사례 심화
function returnFirstValueCopy<T>(data: [T, ...unknown[]]) {
  return data[0];
}

let str2 = returnFirstValueCopy([1, "Hello", "my", "name", "is"]); // Hello

//

// 세 번째 사례
function getLength<T extends { length: number }>(data: T) {
  return data.length;
} // length 프로퍼티가 있을 때만 읽도록 타입을 제한하기

let var1 = getLength([1, 2, 3]); // 3

let var2 = getLength("12345"); // 5

let var3 = getLength({ length: 10 }); //10

// let var4 = getLength(10); // 에러! length 가지고 있지 않음
