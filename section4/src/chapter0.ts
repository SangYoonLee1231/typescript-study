// 함수 타입 정의 방법

// 함수를 설명하는 가장 좋은 방법
// 어떤 매개변수를 받고, 어떤 결과값을 반환하는지 이야기
// 어떤 {타입의} 매개변수를 받고, 어떤 {타입의} 결과값을 변환하는지 이야기
function func(a: number, b: number): number {
  return a + b;
}

//

// 화살표 함수의 타입을 정의하는 방법
const add = (a: number, b: number): number => a + b;

// 함수의 매개변수
function introduce(name = "이상윤", age: number, tall?: number) {
  console.log(`name: ${name}`);
  if (typeof tall === "number") {
    console.log(`tall: ${tall + 10}`);
  }
} // 매개 변수에 초기값을 지정해주면, 해당값의 타입으로 자동 추론해준다.

introduce("이상윤", 27, 176);
introduce("이상윤", 27);

// 선택적 매개변수는 undefined 값도 올 수 있으므로, 함수 내부에서 해당 값에 연산이 필요할 땐 타입 가드를 해주어야 한다.
// 선택적 매개변수는 필수 매개변수들 앞에 오면 안된다.

//

// Rest Parameter
function getSum(...rest: number[]) {
  let sum = 0;
  rest.forEach((it) => {
    return (sum += it);
  });
}

getSum(1, 2, 3);
getSum(1, 2, 3, 4, 5);
