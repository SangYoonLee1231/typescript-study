let user: object = {
  id: 1,
  name: "이상윤",
};

//user.id; // 에러!
// TS에 object라는 이 타입은 그냥 이 값이 객체인 것 외에는 아무런 정보도 없는 타입익 때문에
// 이렇게 정의를 하면 이 객체의 프로퍼티나 메소드가 뭐가 있는지 이 타입은 알 수가 없다.

let userCopy: {
  id: number;
  name: string;
} = {
  id: 1,
  name: "이상윤",
};

userCopy.id;

// 객체의 타입을 정의할 때는 객체의 모든 프로퍼티들의 타입까지 구조적으로 다 정의할 수 있는 방식인 '객체 리터럴 타입'을 사용한다.

let dog: {
  name: string;
  color: string;
} = {
  name: "바둑이",
  color: "Brown",
};

// 객체의 구조를 기준으로 타입을 정의한다. -> 구조적 타입 시스템 (프로퍼티를 기준으로 타입을 결정한다, 프로퍼티 기반 타입 시스템)
// 이름만으로 타입을 정의: 명목적 타입 시스템

//

// ?: 프로퍼티가 있어도 되고 없어도 된다. 선택적 프로퍼티(옵셔널 프로퍼티)라 부름

let user2: {
  id?: number;
  name: string;
} = {
  name: "홍길동",
};

//

let config: {
  readonly apiKey: string;
} = {
  apiKey: "MY API KEY",
};

//config.apiKey = "hacked"; // 에러!

// readonly 키워드를 붙여주면 프로퍼티 값을 바꾸는 것을 막아준다.
