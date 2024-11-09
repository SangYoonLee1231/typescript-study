// 조건부 타입

// JS의 삼항연산자 ?를 사용하여 조건에 따라 타입을 결정하는 굉장히 독특한 문법

type A = number extends string ? string : number;
// number extends string은 거짓이므로, A 타입은 number 타입이다.

//

// 예제
type ObjA = {
  a: number;
};

type ObjB = {
  a: number;
  b: number;
};

type B = ObjB extends ObjA ? number : string;
// ObjB extends ObjA는 참이므로, B 타입은 number 타입이다.

//

// 조건부 타입은 활용성이 낮아 보이는데, 언제 쓰이는 문법일까?
// 일반 타입보단 제네릭과 함께 쓸 때 그 위력이 발휘된다.

// 제네릭과 조건부 타입

type StringNumberSwitch<T> = T extends number ? string : number;

let varA: StringNumberSwitch<number>; // number extends number은 참이므로, varA는 string 타입
let varB: StringNumberSwitch<string>; // number extends string은 거짓이므로, varB는 number 타입

// text 매개변수로 받은 문자열의 모든 공백을 제거하고, 이를 리턴하는 함수
function removeSpaces(text: string | undefined | null) {
  if (typeof text === "string") {
    return text.replaceAll(" ", "");
  } else {
    return undefined;
  }
}

let result = removeSpaces("this is me") as string;
// result는 string | undefined 타입이므로, string으로 단언이 필요하다.
let result2 = result?.toUpperCase();

// 위 코드의 문제점: 문자열만 인수로 전달하는 경우 이렇게 타입 단언이나 옵셔널 체이닝을 써주야 한다.

// 조건부 타입과 함수 오버로딩을 통한 해결
function removeSpacesGeneric<T>(text: T): T extends string ? string : undefined;
function removeSpacesGeneric(text: any) {
  if (typeof text === "string") {
    return text.replaceAll(" ", "");
  } else {
    return undefined;
  }
}

let result3 = removeSpacesGeneric("this is me"); // result3은 string 타입
let result4 = result3?.toUpperCase();

let result5 = removeSpacesGeneric(undefined); // result4는 undefined 타입
