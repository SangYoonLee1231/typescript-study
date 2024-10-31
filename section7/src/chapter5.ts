// 프로미스와 제네릭

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(20);
  }, 3000);
});

promise.then((response) => {
  console.log(response); // 20
  // 이 때 response는 unknown 타입이다.
});

// 이럴 때 제네릭을 이용한다.

// JavaScript의 내장 클래스인 Promise는
// TypeScript에서는 제네릭 클래스로 타입이 별도로 선언되어 있다.

const promise2 = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    resolve(20);
  }, 3000);
});

promise2.then((response) => {
  console.log(response); // 20
  // 이제response는 number 타입으로 잘 추론된다.
});

// 실패했을 때
const promise3 = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    reject("~~ 때문에 실패");
  }, 3000);
});

promise.catch((err) => {
  // 여기서 err은 any 타입이다.
  // 타입 좁히기를 사용해야 한다. 다른 방법은 없다.
  if (typeof err === "string") {
    console.log(err);
  }
});

// reject, 즉 실패의 상황에서는 타입을 정해줄 수 없다. 그래서 타입 좁히기를 사용해야 한다.

//

// 보통 Promise는 어떤 데이터를 불러오는 함수의 반환값으로 자주 쓰인다.
// 이러한 상황을 살펴보자.

// 프로미스를 반환하는 함수의 타입을 정의

interface Post {
  id: number;
  title: string;
  content: string;
}

function fetchPost() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: 1,
        title: "게시글 제목",
        content: "게시글 컨텐츠",
      });
    });
  });
}

const postRequest = fetchPost(); // Promise 객체가 할당

postRequest.then((post) => {
  // console.log(post.id); // post는 unknown 타입이라 읽을 수 없음
});

// 이를 제네릭을 이용해 해결하는 방법
function fetchPost2(): Promise<Post> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: 1,
        title: "게시글 제목",
        content: "게시글 컨텐츠",
      });
    });
  });
}
