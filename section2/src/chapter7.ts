// void
// void는 '공허'라는 뜻. 아무것도 없음을 의미하는 타입

function func1(): string {
  return "hello";
}

function func2(): void {
  console.log("hello");
}
// 리턴값이 없는 함수의 리턴값 타입을 설정할 때 void를 쓴다.
// undefined나 null로 성정하면 함수에서 return문이 반드시 필요하게 되므로, 그래서 void 타입을 사용한다.

// void 특징
// void 타입으로 정의한 변수에는 어떠한 값도 담을 수 없다. 오직 undefined만 담을 수 있다.
// 다만 tsconfig.js의 strictNullChecks를 끄면 void 타입 변수에 null을 할당할 수 있다.

//

// never
// 존재하지 않는 불가능한 타입

function func3(): never {
  while (true) {}
}
// 함수가 절대로 정상적으로 종료될 수 없어서, 함수의 반환값 자체가 있는 것이 모순인 상활일 때 never 타입이 필요하다.

function func4(): never {
  throw new Error();
}
// 실행되면 바로 프로그램이 중지되므로, never로 정의하는 것이 바람직하다.
// any 타입의 변수도 never 타입의 변수에는 절대 담을 수 없다.
