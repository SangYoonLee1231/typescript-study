// map, forEach 메서드 타입 정의하기

// 1. map 매세드

const arr = [1, 2, 3];
const newArr = arr.map((it) => it * 2);
// [2, 4, 6]

// function map(arr: unknown, callback: (item: unknown) => unknown) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     result.push(callback(arr[i]));
//   }

//   return result;
// }
