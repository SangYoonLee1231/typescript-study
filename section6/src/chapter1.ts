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

// const empolyeeB = new Empolyee();
