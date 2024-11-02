// 템플릿 리터럴 타입

// 스트링 리터럴 타입들을 기반으로 특정 패턴을 갖는 문자열 타입들을 만드는 기능

type Color = "red" | "black" | "green";

type Animal = "dog" | "cat" | "chicken";

type ColoredAnimal = `${Color}-${Animal}`;
// type ColoredAnimal = "red-dog" | "red-cat" | "red-chicken" | "black-dog" | "black-cat" | "black-chicken" | "green-dog" | "green-cat" | "green-chicken"

const coloredAnimal: ColoredAnimal = "black-cat";

// 실제로 사용되는 경우가 그리 많진 않다.
