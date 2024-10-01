# 함수와 타입

## 함수 타입 정의 방법

- 함수를 설명하는 가장 좋은 방법은 '어떤 타입의 매개변수를 받고, 어떤 타입의 결과값을 변환하는지'를 이야기하는 것이다.

```ts
function func(a: number, b: number): number {
  return a + b;
}

// 화살표 함수의 타입을 정의하는 방법
const add = (a: number, b: number): number => a + b;
```

<br/>

- 함수의 매개변수

```ts
function introduce(name = "이상윤", age: number, tall?: number) {
  console.log(`name: ${name}`);
  if (typeof tall === "number") {
    console.log(`tall: ${tall + 10}`);
  }
} // 매개 변수에 초기값을 지정해주면, 해당값의 타입으로 자동 추론해준다.

introduce("이상윤", 27, 176);
introduce("이상윤", 27);
```

- 선택적 매개변수는 undefined 값도 올 수 있으므로, 함수 내부에서 해당 값에 연산이 필요할 땐 타입 가드를 해주어야 한다.

- 선택적 매개변수는 필수 매개변수들 앞에 오면 안된다.

<br/>

- Rest Parameter의 타입 정의

  ```ts
  function getSum(...rest: number[]) {
    let sum = 0;
    rest.forEach((it) => {
      return (sum += it);
    });
  }

  getSum(1, 2, 3);
  getSum(1, 2, 3, 4, 5);
  ```

<br/><br/>

## 함수 타입 표현식과 호출 시그니쳐

- 함수의 타입을 별도로 정의하는 문법들

### 함수 타입 표현식 (Function Type Expression)

```ts
type Add = (a: number, b: number) => number;

const add: Add = (a, b) => a + b;
```

- 이 문법을 호출 시그니쳐 또는 함수 시그니쳐라고도 부르지만, 공식 문서에 적혀있는 정식 명칙은 '함수 타입 표현식'이다.

<br/>

- 중복되는 함수 타입 표현식을 굉장히 깔끔하게 고칠 수 있는 방법

  ```ts
  type Operation = (a: number, b: number) => number;

  const add1: Operation = (a, b) => a - b;
  const sub: Operation = (a, b) => a - b;
  const multiply: Operation = (a, b) => a - b;
  const divide: Operation = (a, b) => a - b;

  const add1Copy: (a: number, b: number) => number = (a, b) => a + b;
  ```

<br/>

### 호츨 시그니쳐

```ts
type Operation2 = {
  (a: number, b: number): number;
};

const add2: Operation2 = (a, b) => a - b;
const sub2: Operation2 = (a, b) => a - b;
const multiply2: Operation2 = (a, b) => a - b;
const divide2: Operation2 = (a, b) => a - b;
```

- 함수의 타입을 정의하는데 이렇게 중괄호를 열어서 마치 객체 타입을 정의하듯이 하는 이유는, 사실 JavaScript의 함수도 객체이기 때문이다.

<br/>

- 하이브리드 타입

  ```ts
  type Operation3 = {
    (a: number, b: number): number;
    name: string; // 하이브리드 타입
  };
  ```

<br/><br/>
