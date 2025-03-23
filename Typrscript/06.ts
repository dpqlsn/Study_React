// 맵드타입
// 맵드 타입이란 기존에 정의되어 있는 타입을 새로운 타입으로 변환해 주는 문법을 의미

// 맵드 타입의 기본 문법
// 맵드 타입은 위에서 살펴본 자바스크립트의 map 함수를 타입에 적용했다고 보면 됨

type Heroes = 'Hulk' | 'Thor' | 'Capt';

type HeroProfiles = { [K in Heroes]: number };
const heroInfo: HeroProfiles = {
    Hulk: 54,
    Thor: 1000,
    Capt: 33,
}

// 조건부 타입
// 조건부 타입은 조건에 따라 다른 타입을 선택할 수 있는 문법, 마치 자바스크립트의 삼항 연산자처럼 조건을 확인한 후 조건에 따라 다른 타입을 추론

// 조건식 ? 첫번째타입 : 두번째타입

interface Person {
    name: string;
    age: number;
}
interface Developer extends Person {
    skill: string;
}

  type Result = Developer extends Person ? string : number; // string

// infer 
// 타입스크립트 infer는 조건부 타입에서 미리 정의되지 않은 타입을 유연하게 정의할 수 있게 도와주는 문법
// 항상 조건부 타입 문법과 같이 사용되며 복잡한 타입 코드를 줄여줌

type ElementType<T> = T extends (infer ArrayElement)[] ? ArrayElement : T

// infer 유효범위
// 앞에서 infer 뒤에 나오는 타입은 조건부 문법 안에서만 사용