// 제네릭 클래스

class List<T> {
  constructor(private list: T[]) {}

  push(data: T) {
    this.list.push(data);
  }
  pop() {
    return this.list.pop();
  }

  print() {
    console.log(this.list);
  }
}

const numberList = new List([1, 2, 3]);
numberList.pop();
numberList.push(4);
numberList.print();

const stringList = new List(["1", "2"]);

// 클래스의 생성자를 호출할 때, 이 생성자의 인수로 전달하는 값(["1", "2])을 기준으로 타입 변수의 타입을 추론한다.
// 제네릭 인터페이스랑 제네릭 타입 변수와는 다르게 변수 선언 시 앞에 타입을 명시해주지 않아도 된다.
// const stringList = new List<number>(["1", "2"]); <- 이럴 필요 없다
