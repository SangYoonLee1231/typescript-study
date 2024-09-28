// 타입 단언 - Type Assertion

type Person = {
  name: string;
  age: number;
};

/*
let person: Person = {};
person.name = "이상윤";
person.age = 27;
*/
// 이런 식으로 객체를 초기화 해주고 싶으면 어떻게 해야 할까?

// 이럴 때 타입 단언을 사용한다.
let person = {} as Person;
person.name = "이상윤";
person.age = 27;

// 연습
type Dog = {
  name: string;
  color: string;
};

let dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도",
} as Dog;

// 타입 단언을 사용하려면 적어도 하나의 규칙을 만족해 주어야 한다.
// A as B일 떄, A가 B의 슈퍼타입 or 서브타입 이어야 함

let num1 = 10 as never; // A는 B의 슈퍼타입
let num2 = 10 as unknown; // A는 B의 서브타입
// let num3 = 10 as string; // A는 B의 슈퍼타입 X, 서브타입 X
let num4 = 10 as unknown as string; // 중간에 unknown을 끼고 다중으로 단언을 하면 이런 식으로 단언이 안 되는 타입으로도 단언을 해줄 수 있다.
// 다만, 이 것은 절대로 좋은 방법이 아니다. (TS를 쓰는 이유가 없어짐)

//

// const 단언
let num5 = 10 as const;
// const로 선언한 변수와 동일한 효과를 보도록 만들어주는 단어

// const 단언은 특별히 객체 타입과 함께 사용할 때 좀 활둉도가 있다.
let cat = {
  name: "야용이",
  color: "yellow",
} as const; // 모든 프로퍼티가 readonly가 된 객체로 추론

// cat.name = "":
// 모든 프로퍼티를 readonly 프로퍼티로 만들 수 있어서 상황에 따라 괴앚ㅇ히 편리하게 사용할 수 있다.

//

// Non Null 단언
type Post = {
  title: string;
  author?: string;
};

let post: Post = {
  title: "게시글1",
  author: "이상윤",
};

const len: number = post.author!.length;
// author 값이 없으면 number 값 전체가 undefined로 인식
// ! 붙인 값이 null이나 undefined가 아니라고 컴파일러가 믿도록 만듦
