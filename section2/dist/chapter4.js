// 타입 별칭
let user = {
    id: 1,
    name: "이상윤",
    nickname: "syl",
    birth: "1998.01.23",
    bio: "안녕하세요",
    location: "서울시",
};
let user2 = {
    id: 2,
    name: "이상윤",
    nickname: "syl",
    birth: "1998.01.23",
    bio: "안녕하세요",
    location: "서울시",
};
let userCopy = {
    id: 1,
    name: "이상윤",
    nickname: "syl",
    birth: "1998.01.23",
    bio: "안녕하세요",
    location: "서울시",
};
let user2Copy = {
    id: 2,
    name: "이상윤",
    nickname: "syl",
    birth: "1998.01.23",
    bio: "안녕하세요",
    location: "서울시",
};
let countryCodes = {
    Korea: "ko",
    UnitedStates: "us",
    UnitedKingdom: "us",
};
let countryNumberCodes = {
    Korea: 410,
    UnitedState: 840,
    UnitedKindom: 826,
};
export {};
// 주의점
// 객체의 프로퍼티가 아예 없더라도 타입 규칙을 위반하진 않으므로 에라가 발생하지 않는다.
// 꼭 있어야 할 프로퍼티는 반드시 타입 정의 시 적어주자.
// 다만 이런 경우에는 추가적인 프로퍼티의 Value의 타입이 인덱스 시그니처의 Value 타입과 일치하거나 호환해야 한다.
