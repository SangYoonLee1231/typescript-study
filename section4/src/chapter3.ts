// 함수 오버로딩
// 함수의 매개변수의 개수나 타입에 따라 여러가지 버전으로 정의하는 문법
// JS는 지원하지 않고 TS만 지원한다.

// 오버로드 시그니쳐 (선언식만 써놓은 코드)
function func(a: number): void;
function func(a: number, b: number, c: number): void;

// 구현 시그니쳐 (실제 구현부)
function func(a: number, b?: number, c?: number) {
  if (typeof b === "number" && typeof c === "number") {
    // 매개변수가 3개일 때
    return a + b + c;
  } else {
    // 매개변수가 1개일 때
    return a * 20;
  }
}

func(1);
func(1, 2, 3);
