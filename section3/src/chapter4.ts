// 대수 타입
// 여러 개의 타입을 합성해서 새롭게 만들어낸 타입
// 합잡합과 교집합 타입이 존재한다.

//

// 합잡합 타입 - Union

let a: string | number; // 스트링 넘버 유니온 타입
a = 1;
a = "hello";

let b: string | number | boolean;
b = 1;
b = "hello";
b = true;

let arr: (number | string | boolean)[] = [1, "hello", true];

// 객체 타입들을 이용해서 유니온 타입 만들기
type Dog = {
  name: string;
  color: string;
};

type Person = {
  name: string;
  language: string;
};

type Union1 = Dog | Person;

let union1: Union1 = {
  name: "",
  color: "",
};

let union2: Union1 = {
  name: "",
  language: "",
};

let union3: Union1 = {
  name: "",
  color: "",
  language: "",
};

/*
let union4: Union1 = {
  name: "",
}; // name만 있는 객체는 Dog 타입과 Person 타입의 슈퍼 타입에 해당하는 객체, 어디에도 포함될 수 없다.
*/

// 객체들의 유니온 타입은 집합 개념으로 이해하면 좋다.

//

// 교집합 타입 - Intersection

let c: number & string; // Never 타입만 할당 가능

type DogCopy = {
  name: string;
  color: string;
};

type PersonCopy = {
  name: string;
  language: string;
};

type Intersection = DogCopy & PersonCopy;

let intersection: Intersection = {
  name: "",
  color: "",
  language: "",
};
