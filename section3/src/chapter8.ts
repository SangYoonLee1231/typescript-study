// 서로소 유니온 타입

// 더 쉽고 정확하게 직관적으로 타입을 좁힐 수 있도록 객체 타입을 정의하는 특별한 방법
// 교집합이 없는 타입들로만 만든 유니온 타입
// 교집합이 없는 두 개의 집합을 서로소 집합이라고 표현한다.
// ex) string | number

// 예시
type Admin = {
  tag: "ADMIN"; // string 리터럴 타입
  name: string;
  kickCount: number;
};

type Member = {
  tag: "MEMBER"; // string 리터럴 타입
  name: string;
  point: number;
};

type Guest = {
  tag: "GUSET"; // string 리터럴 타입
  name: string;
  visitCount: number;
};
// Admin, Member, Guest 각각이 서로소 관계

type User = Admin | Member | Guest; // 서로소 유니온 타입 정의

// 가독성이 떨어지는 방식
function login1(user: User) {
  if ("kickCount" in user) {
    // Admin 타입
    console.log(
      `${user.name} 관리자님 현재까지 ${user.kickCount}명 강퇴했습니다.`
    );
  } else if ("point" in user) {
    // Member 타입
    console.log(`${user.name} 맴버님 현재까지 ${user.point}포인트 모았습니다.`);
  } else {
    // Guest 타입
    console.log(
      `${user.name} 손님 현재까지 ${user.visitCount}번 방문하셨습니다.`
    );
  }
}

// 가독성을 높히는 방식
function login2(user: User) {
  switch (user.tag) {
    case "ADMIN": {
      console.log(
        `${user.name} 관리자님 현재까지 ${user.kickCount}명 강퇴했습니다.`
      );
      break;
    }
    case "MEMBER": {
      console.log(
        `${user.name} 맴버님 현재까지 ${user.point}포인트 모았습니다.`
      );
      break;
    }
    case "GUSET": {
      `${user.name} 손님 현재까지 ${user.visitCount}번 방문하셨습니다.`;
      break;
    }
  }
}

// 예시 2
// 비동기 작업의 결과를 처리하는 객체
type LoadingTask = {
  state: "LOADING";
};

type FailedTask = {
  state: "FAILED";
  error: {
    message: string;
  };
};

type SuccessTask = {
  state: "SUCCESS";
  response: {
    data: string;
  };
};

// type AsyncTask = {
//   state: "LOADING" | "FAILED" | "SUCCESS";
//   error?: {
//     message: string;
//   };
//   response?: {
//     data: string;
//   };
// };

type AsyncTask = LoadingTask | FailedTask | SuccessTask;

function processResult(task: AsyncTask) {
  switch (task.state) {
    case "LOADING": {
      console.log("로딩 중");
      break;
    }
    case "FAILED": {
      console.log(`에러 발생: ${task.error?.message}`);
      break;
    }
    case "SUCCESS": {
      console.log(`성공: ${task.response?.data}`);
      break;
    }
  }
}

const loading: AsyncTask = {
  state: "LOADING",
};

const failed: AsyncTask = {
  state: "FAILED",
  error: {
    message: "오류 발생 원인은 ...",
  },
};

const success: AsyncTask = {
  state: "SUCCESS",
  response: {
    data: "데이터 ..",
  },
};
