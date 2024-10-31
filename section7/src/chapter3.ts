// 제네릭 인터페이스

// 제레릭 함수처럼 타입 변수를 이용한다.

interface KeyPair<K, V> {
  key: K;
  value: V;
}

let keyPair: KeyPair<string, number> = {
  key: "key",
  value: 0,
}; // 제네릭 인터페이스를 사용할 때는 반드시 타입 변수에 할당할 타입을 꺾쇠와 함께 사용해야 한다.

// 타입 변수 (TS 공식 문서 용어)
// = 타입 파라미터
// = 제네릭 타입 변수
// = 제네릭 타입 파라미터

let keyPair2: KeyPair<boolean, string[]> = {
  key: true,
  value: ["1"],
};

//

// 제네릭 인터페이스는 특히 객체의 인덱스 시그니쳐 문법과 함께 사용하면 굉장히 유연한 객체 타입을 만들 수 있다.

// 인덱스 시그니쳐
interface NumberMap {
  [key: string]: number;
}

let numberMap1: NumberMap = {
  key: -1231,
  key2: 123234,
};

interface Map<V> {
  [key: string]: V;
}

let stringMap: Map<string> = {
  key: "value",
};

let booleanMap: Map<boolean> = {
  key: true,
};

//

// 제네릭 타입 별칭

type Map2<V> = {
  [key: string]: V;
};

let stringMap2: Map2<string> = {
  key: "hello",
};

//

// 제네릭 인터페이스의 활용 예시

// 유저 관리 프로그램 -> 학생 유저와 개발자 유저로 나뉨

interface Student {
  type: "student";
  school: string;
}

interface Developer {
  type: "developer";
  skill: string;
}

interface User<T> {
  name: string;
  profile: T;
}

// 학생만 할 수 있는 기능
function goToSchool(user: User<Student>) {
  //   if (user.profile.type !== "student") {
  //     console.log("잘 못 오셨습니다");
  //     return;
  //   }
  // 제네릭을 사용하면 타입 좁히기를 안 해도 된다.

  const school = user.profile.school;
  console.log(`${school}로 등교 완료`);
}

const developerUser: User<Developer> = {
  name: "이상윤",
  profile: {
    type: "developer",
    skill: "TypeScript",
  },
};

const studentUser: User<Student> = {
  name: "홍길동",
  profile: {
    type: "student",
    school: "한국외대",
  },
};
