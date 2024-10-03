// 사용자 정의 타입 가드
// 사용자 입맛 대로 타입 가드를 작성하는 방법

// 에시의 전제: 서로소 유니온 타입 이용 불가 (타입을 바꿀 수 없는 상황)

type Dog = {
  name: string;
  isBark: boolean;
};

type Cat = {
  name: string;
  isScratch: boolean;
};

type Animal = Dog | Cat;

// 안 좋은 방법
function warning(animal: Animal) {
  if ("isBark" in animal) {
    // 강아지
    animal;
  } else if ("isScratch" in animal) {
    // 고양이
  }
}

// 사용자 정의 타입 가드를 사용한 좋은 방법
function isDog(animal: Animal): animal is Dog {
  return (animal as Dog).isBark !== undefined;
  // animal을 Dog 타입으로 단언하고, 그러했을 때 isBark의 유무를 확인
} // animal is Dog: 만일 함수가 true를 반환한다면, animal은 Dog이다.

function isCat(animal: Animal): animal is Cat {
  return (animal as Cat).isScratch !== undefined;
}

function warning2(animal: Animal) {
  if (isDog(animal)) {
    // 강아지
    animal;
  } else if ("isScratch" in animal) {
    // 고양이
  }
}
// 타입스크립트는 우리가 직접 만든 함수의 반환값을 가지고는 타입을 잘 좁혀주지 못한다.
// is 문법을 통해 이를 보완
