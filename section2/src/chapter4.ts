// 타입 별칭

let user: {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
} = {
  id: 1,
  name: "이상윤",
  nickname: "syl",
  birth: "1998.01.23",
  bio: "안녕하세요",
  location: "서울시",
};

let user2: {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
} = {
  id: 2,
  name: "이상윤",
  nickname: "syl",
  birth: "1998.01.23",
  bio: "안녕하세요",
  location: "서울시",
};
// 타입 정의 코드의 중복을 방지하기 위해
// 타입을 변수처럼 정의해서 사용할 수 있는 '타입 별칭'을 사용하면 좋다.

// 타입 별칭 만들기
type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};

let userCopy: User = {
  id: 1,
  name: "이상윤",
  nickname: "syl",
  birth: "1998.01.23",
  bio: "안녕하세요",
  location: "서울시",
};

let user2Copy: User = {
  id: 2,
  name: "이상윤",
  nickname: "syl",
  birth: "1998.01.23",
  bio: "안녕하세요",
  location: "서울시",
};

// 타입 별칭 사용할 때 주의할 점
// 같은 스코프 내에서는 이름이 중복되지 않도록 해주어야 한다.
// 타입 별칭 코드 역시 컴파하여 JS로 변환 시 제거된다.

//

// 인덱스 시그니쳐
// key와 value의 규칙을 기준으로 객체의 타입을 정의할 수 있는 문법
type CountryCodes = {
  [key: string]: string;
};

let countryCodes: CountryCodes = {
  Korea: "ko",
  UnitedStates: "us",
  UnitedKingdom: "us",
};
// 아주 유연한 타입 정의 가능
// 객체에 정의해야 할 프로퍼티가 너무 많을 때, key와 value의 타입이 어떤 규칙을 가질 때 유용하다.

type CountryNumberCodes = {
  [key: string]: number;
  Korea: number;
};

let countryNumberCodes: CountryNumberCodes = {
  Korea: 410,
  UnitedState: 840,
  UnitedKindom: 826,
};

// 주의점
// 객체의 프로퍼티가 아예 없더라도 타입 규칙을 위반하진 않으므로 에라가 발생하지 않는다.
// 꼭 있어야 할 프로퍼티는 반드시 타입 정의 시 적어주자.
// 다만 이런 경우에는 추가적인 프로퍼티의 Value의 타입이 인덱스 시그니처의 Value 타입과 일치하거나 호환해야 한다.
