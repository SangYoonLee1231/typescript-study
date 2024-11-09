// 맵드 타입 (Mapped Type)

// 기존의 객체 타입을 기반으로 새로운 객체 타입을 만드는 문법

interface User {
  id: number;
  name: string;
  age: number;
}

// 한 명의 유저 정보를 불러오는 기능
function fetchUser(): User {
  return {
    id: 1,
    name: "이상윤",
    age: 27,
  };
}

// 한 명의 유저 정보를 수정하는 기능
function updateUser(user: User) {
  // 수정하는 기능
}

updateUser({
  id: 1,
  name: "홍길동",
  age: 20,
}); // 이렇게 말고, 수정하려는 프로퍼티만 보내고 싶다.

// mapped type으로 이 문제를 해결해보자

// 일단 mapped type은 인터페이스에서는 만들 수 없으므로 타입 별칭에서 작업해야 한다.

// mapped type 문법
type PartialUser = {
  [key in "id" | "name" | "age"]?: User[key];
  // [key가 무엇이 될 수 있는지 정의하는 곳]: value 값이 무엇이 될 수 있는지 정의하는 곳
};
// {
//   id?: User["id"], -> number
//   name?: User["name"], -> string
//   age?: User["age"] -> number
// }
//

type BooleanUser = {
  [key in "id" | "name" | "age"]: boolean;
};

type BooleanUser2 = {
  [key in keyof User]: boolean;
};

type ReadOnlyUser = {
  readonly [key in keyof User]: User[key];
};

// 실무에서 자주 쓰이는 중요한 타입이다.
