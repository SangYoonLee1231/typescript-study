// 분산적인 조건부 타입

// 조건부 타입을 유니온과 함께 사용할 때, 조건부 타입이 분산적으로 동작하도록 업그레이드 되는 문법

type StringNumberSwitch<T> = T extends number ? string : number;

let a: StringNumberSwitch<number>;

let b: StringNumberSwitch<string>;

let c: StringNumberSwitch<number | string>; // string | number
// 이렇게 유니온 타입을 조건부 타입의 타입 변수로 할당하면,
// 일반적인 조건부 타입이 아닌 분산적인 조건부 타입으로 업그레이드 된다.
// 한 번은 number, 한 번은 string 타입으로 분리되서 들어감
// StringNumberSwitch<number>
// StringNumberSwitch<string>
// 그리고 분리된 결과들을 각각 유니온으로 다 묶어준다.

let d: StringNumberSwitch<boolean | number | string>;
// 1단계
// StringNumberSwitch<boolean> |
// StringNumberSwitch<number> |
// StringNumberSwitch<string>

// 2단계
// 각각 number | string | number
// => number | string

//

// 실용적인 예제
// 분산적인 조건부 타입을 이용해 유니온에서 특정 타입만 제가하도록 만들기

type Exclude<T, U> = T extends U ? never : T;

type A = Exclude<number | string | boolean, string>;
// 1단계
// Exclude<number, string> |
// Exclude<string, string> |
// Exclude<boolean, string>

// 2단계
// 각각 number | never | boolean

// 결과
// number | boolean (never은 공집합이므로 유니온 적용하면 없어짐)

// T와 U가 같을 때 -> never 반환하여 없엠
// T와 U가 다를 때 -> T 타입 그대로 반환
// 특정 유니온 타입(T)에서 특정 타입(U)만 제거 가능!!

//

// 비슷한 다른 사례
// 분산적인 조건부 타입을 이용해 유니온에서 특정 타입만 추출하기 (Exclude와 정반대 기능)

type Extract<T, U> = T extends U ? T : never;
type b = Extract<number | string | boolean, string>;
// 1단계
// Extract<number, string> |
// Extract<string, string> |
// Extract<boolean, string>

// 2단계
// 각각 never | string | never

// 결과
// string (never은 공집합이므로 유니온 적용하면 없어짐)

//

// 참고
// 분산적인 조건부 타입이 되지 않도록 막고 싶다면
// 이렇게 extends의 양 옆에 [대괄호]를 씌워주면 된다.
type StringNumberAnother<T> = [T] extends [number] ? string : number;

let var1: StringNumberAnother<boolean | number | string>; // number
