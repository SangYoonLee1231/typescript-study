// keyof 연산자

// 특정 객체 타입으로부터 프로퍼티 키들을 스트링 유니온 타입으로 추출하는 연산자

interface Person {
  name: string;
  age: number;
}

function getPropertyKey(person: Person, key: keyof Person) {
  return person[key];
} // keyof Person === "name" | "age"

const person: Person = {
  name: "이상윤",
  age: 27,
};

getPropertyKey(person, "name"); // 이상윤

// keyof 연산자는 무조건 타입에만 사용할 수 있는 연산자임을 주의하자.

//

// typeof 연산자는 JS와 TS에서 각각 다르게 동작한다.

// typeof 연산자는 아래와 같이 type을 정의할 때 사용하면
// 어떤 변수의 타입을 뽑아내는 용도로도 활용할 수 있다.

const person2: Person = {
  name: "이상윤",
  age: 27,
};

type Person2 = typeof person2;

function getPropertyKey2(person: Person, key: keyof typeof person2) {
  return person2[key];
} // keyof typeof person2 === "name" | "age"
