// unknown 타입
// 모든 타입의 슈퍼 타입, 전체 집합

function unknownExam() {
  let a: unknown = 1;
  let b: unknown = "hello";
  let c: unknown = true;
  let d: unknown = null;
  let e: unknown = undefined;
  // 업 캐스팅

  let unknownVar: unknown;

  //   let num: number = unknownVar;
  //   let str: string = unknownVar;
  //   let bool: boolean = unknownVar;
  // 다운 캐스팅 (안됨)
}

//

// never 타입
// 모든 타입의 서브 타입
// 수학의 집합으로 보면 공집합 개념

function neverExam() {
  function neverFunc(): never {
    while (true) {}
  }

  let num: number = neverFunc();
  let str: string = neverFunc();
  let bool: boolean = neverFunc();
  // 업 캐스팅

  //   let never1: never = 10;
  //   let never2: never = "hello";
  //   let never3: never = true;
  // 다운 캐스팅 (에러)
}

//

// vold 타입
// void는 undefined의 슈퍼 타입

function voidExam() {
  function voidFunc(): void {
    console.log("hi");
  }

  let voidVar: void = undefined; // 업 캐스팅

  function voidFunc2(): void {
    console.log("hello");
    return undefined;
  } // 반환값도 업 캐스팅
}

//

// any 타입
// 치트키 타입, 타입 계층도를 완벽히 무시
// 모든 타입의 슈퍼 타입이자, 모든 타입의 서브 타입이기도 함 (never만 예외)

function anyExam() {
  let unknownVar: unknown;
  let anyVar: any;

  anyVar = unknownVar; // 다운 캐스팅이 가능

  let undefinedVar: undefined;
  undefinedVar = anyVar; // 다운 캐스팅이 가능

  let neverVar: never;
  // neverVar = anyVar; // 네버 타입은 정말 순수한 공집합이므로
  // 네버 타입 변수에는 그 어떤 타입도 다운 캐스팅이 불가능
}
