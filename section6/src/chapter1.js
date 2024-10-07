// 타입스크립트의 클래스
var empolyee = {
    name: "SYL",
    age: 27,
    position: "developer",
    work: function () {
        console.log("일함");
    },
};
var Empolyee = /** @class */ (function () {
    // 생성자
    function Empolyee(name, age, position) {
        this.name = name;
        this.age = age;
        this.position = position;
    }
    // 메서드
    Empolyee.prototype.work = function () {
        console.log("일함");
    };
    return Empolyee;
}());
var empolyeeB = new Empolyee("이상윤", 27, "개발자");
console.log(empolyeeB);
