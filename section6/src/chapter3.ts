// 인터페이스와 클래스

interface CharacterInterface {
  name: string;
  moveSpeed: number;
  move(): void;
} // 여기서 인테페이스는 클래스의 설계도 역할을 한다.

class Character implements CharacterInterface {
  constructor(public name: string, public moveSpeed: number) {}

  move(): void {
    console.log(`${this.moveSpeed} 속도로 이동`);
  }
}
// 인터페이스로 정의하는 필드들은 무조건 public이다.

// 인터페이스를 이용해서 이렇게 설계도를 구현하는 일은, 어떤 라이브러리 구현이나 굉장히 복잡하고 정교한 프로그래밍을 할 때 필요할 수 있다.
