// 자바스크립트 클래스
let studentA = {
  name: "SYL",
  grade: "A+",
  age: 27,
  study() {
    console.log("열심히 공부 함");
  },
  introduce() {
    console.log("안녕하세요");
  },
}; // 한 명의 학생을 객체로 표현

let studentB = {
  name: "길동 홍",
  grade: "A+",
  age: 27,
  study() {
    console.log("열심히 공부 함");
  },
  introduce() {
    console.log("안녕하세요");
  },
}; // 한 명의 학생을 객체로 표현

// 중복 코드 발생
// 이럴 때 JS 클래스를 이용한다.

// 클래스: 객체를 만들어내는 틀

class Student {
  // 필드 (객체의 프로퍼티)
  name;
  grade;
  age;

  // 생성자 (클래스 호출 시 객체를 만드는 메서드)
  constructor(name, grade, age) {
    this.name = name;
    this.grade = grade;
    this.age = age;
  }

  // 메서드
  study() {
    console.log("열심히 공부 함");
  }

  introduce() {
    console.log(`안녕하세요 ${this.name} 입니다.`);
  }
}

let studentC = new Student("이상윤", "A+", 27);
console.log(studentC); // Student { name: '이상윤', grade: 'A+', age: 27 }
// 클래스를 이용해서 만든 객체를 '인스턴스'라 부른다.

studentC.study(); // 열심히 공부 함
studentC.introduce(); // 안녕하세요 이상윤 입니다.

//

// 클래스의 상속
class StudentDeveloper extends Student {
  // 필드
  favoriteSkill;

  // 생성자
  constructor(name, grade, age, favoriteSkill) {
    super(name, grade, age);
    this.favoriteSkill = favoriteSkill;
  }

  // 메서드
  programming() {
    console.log(`${this.favoriteSkill}f로 프로그래밍 함`);
  }
}

const studentDeveloper = new StudentDeveloper("이상윤", "B+", 27, "TypeScript");
console.log(studentDeveloper);
studentDeveloper.programming();
