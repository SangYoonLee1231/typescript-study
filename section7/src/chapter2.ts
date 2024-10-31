// map, forEach 메서드 타입 정의하기

// 1. map 매서드

const arr = [1, 2, 3];
const newArr = arr.map((it) => it * 2);
// [2, 4, 6]

// it이 자동으로 number 타입으로 추론되고 있다.
// 이는 이 map 메서드의 타입이 어딘가에 별도로 선언되어 있기 때문

function map<T>(arr: T[], callback: (item: T) => T) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }

  return result;
}

map(arr, (it) => it * 2);
map(["hi", "hello"], (it) => it.toUpperCase());

// map(["hi", "hello"], (it) => parseInt(it));
// 이렇게 하면 위의 코드는 에러를 발생한다.
// return 값의 타입이 number가 아니기 때문
// 하지만 실제 map 함수는 위와 같은 코드도 동작해야 하므로, 타입 변수를 하나 더 선언해준다.

function map2<T, U>(arr: T[], callback: (item: T) => U) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }

  return result;
}

map2(["hi", "hello"], (it) => parseInt(it));

//

// 2. forEach 메서드

const arr2 = [1, 2, 3];
arr2.forEach((it) => console.log(it));

function forEach<T>(arr: T[], callback: (item: T) => void) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
}

forEach(arr2, (it) => {
  console.log(it.toFixed());
});

forEach(["123", "456"], (it) => {
  console.log(parseInt(it));
});
