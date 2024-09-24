// 열거형 타입 (Enumerable Type, Enum)
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입
// JS엔 없고 TS에서만 특별히 제공되는 새로운 타입
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
    Role[Role["GUEST"] = 2] = "GUEST";
})(Role || (Role = {}));
const user1 = {
    name: "이상윤",
    role: Role.ADMIN, // 0 <- 관리자
};
const user2 = {
    name: "홍길동",
    role: Role.USER, // 1 <- 일반 유저
};
const user3 = {
    name: "아무개",
    role: Role.GUEST, // 2 <- 게스트
};
console.log(user1, user2, user3); // { name: '이상윤', role: 0 } { name: '홍길동', role: 1 } { name: '아무개', role: 2 }
// 숫자를 입력하지 않으면 숫자가 순서대로 자동으로 할당된다.
var RoleCopy;
(function (RoleCopy) {
    RoleCopy[RoleCopy["ADMIN"] = 0] = "ADMIN";
    RoleCopy[RoleCopy["USER"] = 1] = "USER";
    RoleCopy[RoleCopy["GUEST"] = 2] = "GUEST";
})(RoleCopy || (RoleCopy = {}));
const user1Copy = {
    name: "이상윤",
    role: RoleCopy.ADMIN, // 0 <- 관리자
};
const user2Copy = {
    name: "홍길동",
    role: RoleCopy.USER, // 1 <- 일반 유저
};
const user3Copy = {
    name: "아무개",
    role: RoleCopy.GUEST, // 2 <- 게스트
};
console.log(user1, user2, user3); // { name: '이상윤', role: 0 } { name: '홍길동', role: 1 } { name: '아무개', role: 2 }
export {};
// 숫자형 Enum: 각각의 맴버의 값에 숫자가 할당되는 이넘
// Enum은 특이하게도 컴파일 결과가 사라지지 않는다.
