// 타입 좁히기
// 조건문을 이용해 넓은 타입에서 좁은 타입으로
// 타입을 상황에 따라 좁히는 방법

function func(value: number | string) {
  if (typeof value === "number") {
    console.log(value.toFixed());
    // value는 이 조건문 내에서는 number 타입으로 TS에서 자동으로 추론해줌
  } else if (typeof value === "string") {
    console.log(value.toUpperCase());
    // value는 이 조건문 내에서는 string 타입으로 TS에서 자동으로 추론해줌
  }
}
// 이렇게 조건문을 통해 타입을 좁히는 표현을 '타입 가드'로 부른다.

//

// 대표적으로 사용하는 몇 가지 타입 가드들
function func2(value: number | string | Date | null) {
  if (typeof value === "number") {
    console.log(value.toFixed());
    // value는 이 조건문 내에서는 number 타입으로 TS에서 자동으로 추론해줌
  } else if (typeof value === "string") {
    console.log(value.toUpperCase());
    // value는 이 조건문 내에서는 string 타입으로 TS에서 자동으로 추론해줌
  }
  //   } else if (typeof value === "object") {
  //     console.log(value.getTime());
  //   } // 이렇게 하면 안된다.
  else if (value instanceof Date) {
    console.log(value.getTime());
  }
}

//

type Person = {
  name: string;
  age: number;
};

function func3(value: number | string | Date | null | Person) {
  if (typeof value === "number") {
    console.log(value.toFixed());
    // value는 이 조건문 내에서는 number 타입으로 TS에서 자동으로 추론해줌
  } else if (typeof value === "string") {
    console.log(value.toUpperCase());
    // value는 이 조건문 내에서는 string 타입으로 TS에서 자동으로 추론해줌
  }
  //   } else if (typeof value === "object") {
  //     console.log(value.getTime());
  //   } // 이렇게 하면 안된다.
  else if (value instanceof Date) {
    console.log(value.getTime());
  }
  //   else if (value instanceof Person) {
  //   } // instanceof 연산자는 우측에 '타입'이 들어와서는 안된다.
  else if (value && "age" in value) {
    console.log(`${value.age}는 ${value.age}살 입니다.`);
  } // value가 있고, age가 value 안에 있다
}
