// 인터페이스 확장
// 타입 별칠에는 없는데 인터페이스에사만 특별히 사용할 수 있는 독특한 기능

import { SourceOrigin } from "module";

interface Animal {
  name: string;
  age: number;
}

interface Dog {
  name: string;
  age: number;
  isBark: boolean;
}

interface Cat {
  name: string;
  age: number;
  isScratch: boolean;
}

interface Chicken {
  name: string;
  age: number;
  isFly: boolean;
}

// name과 age 프로퍼티를 벌써 4번이나 중복해서 정의했다
// 굉장히 번거롭고 비효율적

interface DogCopy extends Animal {
  isBark: boolean;
}

interface CatCopy extends Animal {
  isBark: boolean;
}

interface ChickenCopy extends Animal {
  isBark: boolean;
}

const dog: DogCopy = {
  name: "",
  age: 10,
  isBark: true,
};

// 인터페이스의 확장 다른말로 상속

//

interface DogCopy2 extends Animal {
  name: "hello";
  isBark: boolean;
}

const dog2: DogCopy2 = {
  name: "hello",
  age: 10,
  isBark: true,
};

// 상속을 받는 인터페이스에서 동일한 프로퍼티의 타입을 다시 정의할 수 있다
// 다만, 다시 정의하려는 타입이 원본 타입의 서브 타입이어야 한다.

//

// 타입 별칠도 확장 가능

type AnimalCopy = {
  name: string;
  color: string;
};

interface Dog extends AnimalCopy {
  name: string;
  age: number;
  isBark: boolean;
}

//

// 다중 확장

interface Dog {
  name: string;
  age: number;
  isBark: boolean;
}

interface Cat {
  name: string;
  age: number;
  isScratch: boolean;
}

interface DogCat extends Dog, Cat {
  name: "";
  color: "";
  isBark: true;
  isScratch: true;
}
// 여러 개의 타입을 함께 상속받을 수 있다.
