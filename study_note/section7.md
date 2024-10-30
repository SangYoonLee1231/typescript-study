# 제네릭

## 제네릭 소개

- 제네릭은 General, 즉 이것도 되고 저것도 된다.

- 제네릭 함수

  ```ts
  function func<T>(value: T): T {
    return value;
  } // <T>: 타입을 저장하는 변수. '타입 변수'라 부름. 인수의 타입에 따라 결정

  let num = func(10);

  let boolean = func(true);

  let str = func("string");

  let arr = func([1, 2, 3]);

  let arr2 = func<[number, number, number]>([1, 2, 3]);
  // 배열을 튜플 타입으로 전달하고 싶을 때
  ```

- 우리가 원하는 대로 함수의 인수에 따라서 반환값의 타입을 가변적으로 정해줄 수 있다.

- 마치 함수계의 종합 병원

<br/><br/>

## 타입 변수 응용하기

- 총 3가지 사례를 살펴본다.

- 사례 1

  ```ts
  function swap<T, U>(a: T, b: U) {
    return [b, a];
  }

  const [a, b] = swap("1", 2);
  ```

  - 타입 변수를 여러 개 선언해서 사용할 수 잇다.

<br/>

- 사례 2

  ```ts
  function returnFirstValue<T>(data: T[]) {
    return data[0];
    // T 자체는 unknown 타입으로 추론
  }

  let num = returnFirstValue([0, 1, 2]); // 0
  let str = returnFirstValue(["Hello", "my", "name", "is"]); // Hello
  ```

  - 이런 식으로 타입 변수를 매개변수에 그대로 갖다가 쓸 필요 없이 배열 타입과 함께 쓸 수도 있다.

<br/>

- 사례 2 심화

  ```ts
  function returnFirstValueCopy<T>(data: [T, ...unknown[]]) {
    return data[0];
  }

  let str2 = returnFirstValueCopy([1, "Hello", "my", "name", "is"]); // Hello
  ```

<br/>

- 사례 3

  ```ts
  function getLength<T extends { length: number }>(data: T) {
    return data.length;
  } // length 프로퍼티가 있을 때만 읽도록 타입을 제한하기

  let var1 = getLength([1, 2, 3]); // 3

  let var2 = getLength("12345"); // 5

  let var3 = getLength({ length: 10 }); //10

  // let var4 = getLength(10); // 에러! length 가지고 있지 않음
  ```

<br/><br/>

## map, forEach 메서드 타입 정의하기

<br/><br/>
