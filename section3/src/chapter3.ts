// 기본 타입 간의 호한성: 특정 타입을 다른 타입으로 취급해도 괜찮은지 판단

let num1: number = 10;
let num2: 10 = 10;

num1 = num2;

//

// 객체 타입 간의 호환성

type Animal = {
  name: string;
  color: string;
};

type Dog = {
  name: string;
  color: string;
  breed: string;
};

let animal: Animal = {
  name: "기린",
  color: "yellow",
};

let dog: Dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진돗개",
};

animal = dog;

// 이처럼 객체 타입들도 기본 타입들처럼 서로 슈퍼 타입 관계를 갖는다.
// 객체는 프로퍼티 기준 - 추가 프로퍼티 없는 객체가 슈퍼 타입이 된다.

type Book = {
  name: string;
  price: number;
};

type ProgrammingBook = {
  name: string;
  price: number;
  skill: string;
};

let book: Book;
let programmingBook: ProgrammingBook = {
  name: "한 입 크기로 잘라먹는 타입스크립트",
  price: 33000,
  skill: "reactjs",
};

book = programmingBook;

// 초과 프로퍼티 검사
// 정의해놓지 않은 프로퍼티를 작성하면 안 되도록 막는 검사

let book2: Book = {
  name: "한 입 크기로 잘라먹는 타입스크립트",
  price: 33000,
  // skill: "reactjs",
};

// 다만, 초과된 프로퍼티를 가진 객체를 할당하는 것은 가능

let book3: Book = programmingBook;

function func(book: Book) {}
func({
  name: "한 입 크기로 잘라먹는 타입스크립트",
  price: 33000,
  // skill: "reactjs", // 이런 경우에도 초과 프포퍼티 검사가 발동
});
func(programmingBook); // 이렇게 변수에 저장한 후 전달해주어야 한다.
