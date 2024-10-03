// 사용자 정의 타입 가드
// 사용자 입맛 대로 타입 가드를 작성하는 방법

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
  } else if ("isScratch" in animal) {
    // 고양이
  }
}

//
function isDog(animal: Animal): animal is Dog {
  return (animal as Dog).isBark !== undefined;
}

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
