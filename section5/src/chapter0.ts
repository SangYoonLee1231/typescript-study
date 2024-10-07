// 인터페이스

interface Person {
  name: string;
  age: number;
}

const person: Person = {
  name: "이상윤",
  age: 27,
};

//

interface Person2 {
  readonly name: string;
  age?: number;
  sayHi: () => void;
  sayBye(): void;
}

// 비교
type Func = {
  (): void;
};

const personTwo: Person2 = {
  name: "이상윤",
  age: 27,
  sayHi: function () {
    console.log("Hi");
  },
  sayBye: function () {
    console.log("Bye");
  },
};

// 메서드에 오버로딩을 구현하고 싶으면 호출 시그너쳐를 아래와 같이 사용해주어야 한다.
interface Person3 {
  readonly name: string;
  age?: number;
  sayHi(): void;
  sayHi(a: number, b: number): void;
}

//

// 인터페이스의 타입 별칭과의 차이점

type Type1 = number | string;
type Type2 = number & string;

// const personThree: Person3 | number = {
//   // ...
// };
// 인터페이스에서는 유니온 타입, 인터섹션 타입을 만들 수 없다.

//

// 인터페이스를 정의할 때 이름 앞에 I를 붙여 정의하는 경우가 있다. (헝가리안 표기법))

interface Iperson {}

// 관습적인 방법이지만 논란이 조금 있음
// 자바스크립트에서는 잘 안쓰는 방식
// 자바스크립트에서는 파스칼, 카멜, 스네이크 표기법을 보통 쓰는데
// 인터페이스 하나를 위해서 또 형가리안 표기법을 써야 되냐는 부정적인 의견도 꽤 있다.
// 이러한 규칙은 팀의 컨벤션을 따라가는 것이 맞다.
