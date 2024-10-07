// 접근 제어자 (Access Modifier)
// 타입스크립트의 클래스에서만 제공하는 기능
// 필드나 메소드에 접근할 수 있는 범위를 설정하는 문법
// public, private, protected

class Empolyee {
  // 필드
  private name: string;
  protected age: number;
  public position: string;

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

const employee = new Empolyee("이상윤", 27, "developer");

// employee.name = "홍길동"; // private
// employee.age = 30; // protected
employee.position = "디자이너";

// private: 클래스 내부에서만 접근이 가능

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

  // 매서드
  func() {
    // this.name = ""; // name이 private이므로 접근 금지
    this.age = 30;
  }
}

// protected: 파생 클래스까진 접근 가능

//

// 참고
// 생성자에도 접근 제어자를 달아줄 수 있는데, 만일 필드에도 선언되어 있다면 이는 중복이 되어 오류가 발생한다.
// 생성자의 매개변수에 접근 제어자를 쓰면 초기화가 자동으로 이루어지며 필드 선언도 생략할 수 있다.
