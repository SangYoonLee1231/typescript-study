// 타입 추론
// TS는 점진적인 타입 시스템을 채택하는 언어

let variable = 10; // 변수 타입을 number로 자동 추론

// 어떤 상황에서 TS가 자동으로 타입을 잘 추론하는지
// 또 어떤 원리로 타입을 추론하는지 함께 살펴보자

let a = 10; // number로 잘 추론
let b = "hello"; // string으로 잘 추론
let c = {
  id: 1,
  name: "이상윤",
  profile: {
    nickname: "SYL",
  },
}; // 객체의 구조를 정확히 파악하여 추론

let { id, name, profile } = c; // 객체를 구조분해할당을 해도 각각 변수의 타입 잘 추론

let [one, two, three] = [1, "hello", true];
// 웬만한 변수 선언은 잘 추론

function func() {
  return "hello";
} // 함수의 반환값 타입을 추론할 때는 초기화하는 값이 아닌 return문 다음에 오는 반환값을 기준으로 추론

function func2(message = "hello") {
  return "hello";
}

// 다 암기 필요 X
// 추론할 정보가 있다면 추론이 되고, 추론할 정보가 없다면 추론이 되지 않는다.

//

// 우리의 예상과 다르게 타입이 추론되는 당황스러운 상황을 살펴보자.

// 상황 1
let d; // 추론 가능한 정보가 없으면 any 타입으로 추론
d = 10; // d가 number 타입으로 추론
d.toFixed();

d = "hello"; // d에 다른 타입 할당 가능, 이제 d는 string으로 추론
d.toUpperCase();

// 이렇게 타입이 계속 바뀌는 상황을 'any 타입의 진화'라고 부른다.
// 변수의 초기값을 지정하지 않으면 이 때는 암묵적인 any 타입으로 추론된다.
// 이러한 상황은 안 만드는 것이 좋다.

// 상황 2
const num = 10; // numebr 리터럴 타입으로 추론
// 어차피 상수이기 때문에 다른 값이 담길 일이 없으므로

const str = "hello"; // string 리터럴 타입으로 추론

// 다른 상황
let arr = [1, "string"]; // numebr string 유니온 타입으로 추론

//

// 어떻게 타입 추론이 되는지?
// 좀 범용적으로 프로그래머가 특정 변수를 사용할 수 있도록 조금 더 넓은 타입으로 추론해주는
// TS가 타입을 추론하는 과정을 '타입 넓히기'라고 표현한다.
let num2 = 10; // 이 케이스도 타입 넓히기에 포함
