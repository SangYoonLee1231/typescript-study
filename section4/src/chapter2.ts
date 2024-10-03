// 함수 타입의 호환성
// 특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은가를 판단하는 것

// 두 가지 체크리스트
// 1. 반환값의 타입이 호환되는가
// 2. 매개변수의 타입이 호환되는가

//

// 1. 반환값의 타입이 호환되는가
type A = () => number;
type B = () => 10;

let a: A = () => 10;
let b: B = () => 10;

a = b; // 하용 (반환값 업캐스팅)
// b = a; // 허용 안됨 (반환값 다운캐스팅)

//

// 2. 매개변수의 타입이 호환되는가
// 2-1. 매개변수의 개수가 같을 때

type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = (value) => {};
let d: D = (value) => {};

// c = d; // 허용 안됨 (매개변수 업캐스팅)
d = c; // 허용 됨 (매개변수 다운캐스팅)
// 매개변수를 기준으로 함수 타입의 호환성을 판단할 때는
// 기존과 반대로 업캐스팅 땐 오히려 안되고, 다운캐스팅 땐 된다.

// 이렇게 되는 이유를 알아보기 위해 다음 예시를 살펴보자.
type Animal = {
  name: string;
};

type Dog = {
  name: string;
  color: string;
};

let animalFunc = (animal: Animal) => {
  console.log(animal.name);
};

let dogFunc = (dog: Dog) => {
  console.log(dog.color);
};

// animalFunc = dogFunc; // 업캐스팅 (에러)

let testFunc = (animal: Animal) => {
  console.log(animal.name);
  // console.log(animal.color); // color을 할당해줄 수 없다.
};

dogFunc = animalFunc;

let testFunc2 = (animal: Dog) => {
  console.log(animal.name);
};

// 2-2. 매개변수의 개수가 다를 때
// 전제: 매개변수의 타입이 모두 같아야 함 (안그러면 에러)

type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;

let func1: Func1 = (a, b) => {};
let func2: Func2 = (a) => {};

func1 = func2;
// func2 = func1; // 매개변수 하나를 할당해줄 수 없다
