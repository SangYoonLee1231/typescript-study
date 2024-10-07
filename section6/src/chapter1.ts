// 타입스크립트의 클래스

const empolyee = {
  name: "SYL",
  age: 27,
  position: "developer",
  work() {
    console.log("일함");
  },
};

class Empolyee {
  // 필드
  name: string;
  age: number;
  position: string;

  // 생성자
  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  // 메서드
  work() {
    console.log("일함");
  }
}

const empolyeeB = new Empolyee("이상윤", 27, "개발자");
console.log(empolyeeB);

//

// 타입스크립트에서의 클래스는 자바스크립트의 클래스로 취급이 동시에 되면서 타입으로도 취급될 수 있다.
const empolyeeC: Empolyee = {
  name: "",
  age: 0,
  position: "",
  work() {},
};

//

// 클래스를 확장해보자

class ExecutiveOfficer extends Empolyee {
  // 필드
  officeNumber: number;

  // 생성자
  constructor(
    name: string,
    age: number,
    position: string,
    officeNumber: number
  ) {
    super(name, age, position);
    this.officeNumber = officeNumber;
  }
}
