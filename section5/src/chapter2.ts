// 인터페이스 합치기

interface Person {
  name: string;
}

interface Person {
  // name: number; // 충돌(타입을 다르게 중복 정의)은 허용하지 않음
  name: string;
  age: number;
}
// 인터페이스는 동일한 이름으로 중복 선언이 가능하다.
// 그 이유는 동일한 이름으로 정의한 인터페이스는 결국 다 합쳐지기 때문이다.
// 이러한 현상을 선언합침(선업머징)이라고 부른다.

const person: Person = {
  name: "syl",
  age: 27,
};

// 인터페이스를 합칠 때는 동일한 프로퍼티를 정의할 때 반드시 타입도 동일해야 한다.

//

// 모듈 보강
// 인처페이스 합치기는 TS의 모듈 보강 작업을 할 떄 주로 사용한다.

// 이미 정의된 라이브러리라 가정
interface Lib {
  a: number;
  b: number;
}

// 모듈 보강을 위해 인터페이스 재정의
interface Lib {
  c: string;
}

const lib: Lib = {
  a: 1,
  b: 2,
  c: "hello",
};
