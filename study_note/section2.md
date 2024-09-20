# 타입스크립트 기본

## 타입스크킙트 초기 세팅

- `npm init`

- `sudo npm install -g typescript`

- `npm i @type/node`

- `tsconfig.json` 파일 만들어 설정

  ```json
  {
    "compilerOptions": {
      "target": "ESNext", // 변환되는 JS의 버전 설정
      "module": "ESNext", // 변환되는 JS의 모듈 설정
      "outDir": "dist", // 컴파일러 결과 생성된 JS 파일의 저장 위치 설정
      "strict": true, // 엄격한 타입 검사 모드 설정
      "moduleDetection": "force" // 각 파일을 독립된 모듈로 인식
    },
    "include": ["src"] // 컴파일 범위 설정
  }
  ```

- `tsc` 명령어를 통해 ts 파일이 잘 컴파일 되는지 확인

<br/><br/>

## 기본 타입

- TS가 자체적으로 제공하는 타입, 내장 타입이라고도 부름

- 타입스크립트가 기본적으로 제공하는 타입

    <img src="img/type.png" />

<br/><br/>

## 원시 타입

- 하나의 값만 저장하는 타입, Primitive Type

- number, string, boolean, null, undefined

- 타입 주석 (Type Annotation): 콜론과 함께 어떤 변수의 타입을 명시해주는 코드 부분

- **number**

  ```ts
  // number
  let num1: number = 123;
  let num2: number = -123;
  let num3: number = 0.123;
  let num4: number = -0.123;
  let num5: number = Infinity;
  let num6: number = -Infinity;
  let num7: number = NaN;
  num1 = "hello"; // 에러!
  num1.toUpperCase(); // 에러!
  num1.toFixed();
  ```

- **string**

  ```ts
  // string
  let str1: string = "hello";
  let str2: string = `hello ${num1}`;
  str1.toFixed(); // 에러!
  str1.toUpperCase();
  ```

- **boolean**

  ```ts
  // boolean
  let bool1: boolean = true;
  let bool2: boolean = false;
  ```

- **null**, **undefined**

  ```ts
  // null
  let null1: null = null;
  ```

  ```ts
  // undefined
  let unde1: undefined = undefined;
  ```

- null에 대한 엄격한 모드를 풀어 숫자 변수에 초기값으로 null 할당하기

  ```json
  {
    "compilerOptions": {
      "target": "ESNext",
      "module": "ESNext",
      "outDir": "dist",
      "strict": true,
      "strictNullChecks": false, // 엄격한 null 검사
      "moduleDetection": "force"
    },
    "include": ["src"]
  }
  ```

  - `strict` 옵션은 `strictNullChecks`의 상위 옵션이다.

  ```ts
  // strictNullChecks
  let numA: number = null;
  ```

- **리터럴 타입**

  - 값 그 자체가 타입이 되는 타입 (리터럴이 값이라는 뜻)

  - 나중에 복합적인 타입들을 만들 때 굉장히 유용하게 사용된다고 한다.

  ```ts
  // 리터럴 타입
  let numB: 10 = 10;
  numB = 12; // 에러!

  let strA: "hello" = "hello";
  let boolA: true = false; // 에러!
  ```

<br/><br/>

## 배열과 튜플

- **배열**

  ```ts
  // 배열
  let numArr: number[] = [1, 2, 3];

  let strArr: string[] = ["hello", "hi", "annyoung"];

  let boolArr: Array<boolean> = [true, false, true]; // <>을 제네릭 문법이라 부름 (잘 쓰지 않음)
  ```

  ```ts
  // 배열에 들어가는 요소들의 타입이 다양할 경우
  let multiArr: (number | string)[] = [1, "hello"]; // 유니온 타입
  ```

  ```ts
  // 다차원 배열의 타입을 정의하는 방법
  let doubleArr: number[][] = [
    [1, 2, 3],
    [4, 5],
  ];
  ```

- **튜플**

  ```ts
  // 튜플 (TS에서만 제공)
  let tup1: [number, number] = [1, 2];
  // tup1 = [1, 2, 3];
  // tup1 = ["1", "2"];

  let tup2: [number, string, boolean] = [1, "2", true];
  // 튜플은 사실 배열이다.

  tup1.push(1);
  tup1.pop();
  tup1.pop();
  tup1.pop();
  // 배열 메소드를 사용할 때는 길이 제한이 발생하지 않는다.
  // 그렇기 때문에 각별히 주의해서 메서드를 사용해야 한다.

  // 튜플이 유용한 경우 예시
  const users = [
    ["이아무개", 1],
    ["김아무개", 2],
    ["박아무개", 3],
    [4, "윤아무개"], // 잘못
  ];

  const usersCopy: [string, number][] = [
    ["이아무개", 1],
    ["김아무개", 2],
    ["박아무개", 3],
    //[4, "윤아무개"], // 잘못된 요소에 오류 발생!
  ];
  // 인덱스 위치에 따라 넣어야 할 값이 정해져 있을 때 튜플을 이용하면 오류를 방지할 수 있다.
  ```

<br/><br/>

## 객체

<br/><br/>
