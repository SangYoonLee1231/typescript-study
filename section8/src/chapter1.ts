// 인덱스드 엑세스 타입 (Indexed Access Type)

// index라는 것을 이용해서 다른 타입 내에 특정 property의 타입을 추출하는 타입

interface Post {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}

function printAuthorInfo(author: Post["author"]) {
  console.log(`${author.name}-${author.id}`);
}

const post: Post = {
  title: "게시글 제목",
  content: "게시글 본문",
  author: {
    id: 1,
    name: "이상윤",
    age: 27,
  },
};

printAuthorInfo(post.author);

//

// 주의점
// 1. 인덱스에 들어가는 문자열은 값이 아니라 반드시 타입이어야 한다.

// const key = author;

// function printAuthorInfo(author: Post[key]) {...} // 에레!

// 2. 인덱스에 타입을 쓰더라도 없는 타입을 쓰면 안된다.

//

// 응용 팁: 중첩 대괄호 사용

function printAuthorInfo2(authorId: Post["author"]["id"]) {
  console.log(`아이디: ${authorId}`);
}

printAuthorInfo2(post.author.id);

//

// 인덱스드 엑세스 타입은 객체 뿐만 아니라 배열 타입으로부터도 특정 요소의 타입을 뽑아내는 것이 가능하다.

type PostList = {
  title: "게시글 제목";
  content: "게시글 본문";
  author: {
    id: 1;
    name: "이상윤";
    age: 27;
  };
}[];

const post2: PostList[number] = {
  title: "게시글 제목",
  content: "게시글 본문",
  author: {
    id: 1,
    name: "이상윤",
    age: 27,
  },
}; // 배열의 요소 타입을 추출할 때에는 인덱스에 number 타입을 넣어주면 된다.

const post3: PostList[0] = {
  title: "게시글 제목",
  content: "게시글 본문",
  author: {
    id: 1,
    name: "이상윤",
    age: 27,
  },
}; // 또 인덱스에 다음과 같이 Number Literal 타입을 넣어도 된다. 숫자와 관계없이 모두 Number 타입을 넣은 것과 동일하게 동작한다.

//

// 튜플과 함께 사용하는 법

type Tup = [number, string, boolean];

type Tup0 = Tup[0]; // number
type Tup1 = Tup[1]; // string
type Tup2 = Tup[2]; // boolean
type TupNum = Tup[number]; // string | number | boolean
