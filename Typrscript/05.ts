// 타입스크립트에서 모듈이라는 개념은 +E6의 모둘 개념과 유사함
// 모듈은 전역 변수와 구분되는 자체 유효 범위를 가지며 export, import와 같은 키워드를 사용하지 않으면 파일 접근 불가능

// 타입스크립트 선언 파일
declare const global = 'sth';

// 전역 변수와 전역 함수에 대한 타입 선언

// 전역 변수
declare const pi = 3.14;

// 전역 함수
declare namespace myLib {
    function greet(person: string): string;
    let name: string;
}
myLib.greet('캡틴');
myLib.name = '타노스';

// 인덱싱
// 타입스크립트에서 배열 요소와 객체의 속성을 접근할 때는 인터페이스를 사용

const arr = ['Thor', 'Hulk'];
arr[0]; // 'Thor'

interface StringArray {
    [index: number]: string;
}

const arr1: StringArray = ['Thor', 'Hulk'];
  arr[0]; // 'Thor'

// 타입으로 배열 변경 제한하기
interface ReadonlyStringArray {
    readonly [index: number]: string;
}

const arr2: ReadonlyStringArray = ['Thor', 'Hulk'];
  arr[2] = 'Capt'; // Error!

// 유틸리티 타입
// 유틸리티 타입은 이미 정의해 놓은 타입을 변환할 때 사용하기 좋은 타입 문법
// 유틸리티 타입을 꼭 쓰지 않더라도 기존의 인터페이스, 제네릭 등의 기본 문법으로 충분히 타입을 변환할 수 있지만 유틸리티 타입을 쓰면 훨씬 더 간결한 문법으로 타입을 정의가능

// Partial : 파셜(Partial) 타입은 특정 타입의 부분 집합을 만족하는 타입을 정의
interface Address {
    email: string;
    address: string;
}

type MayHaveEmail = Partial<Address>;
  const me: MayHaveEmail = {}; // 가능
  const you: MayHaveEmail = { email: 'test@abc.com' }; // 가능
  const all: MayHaveEmail = { email: 'capt@hero.com', address: 'Pangyo' }; // 가능

// Pick : 타입은 특정 타입에서 몇 개의 속성을 선택하여 타입 정의
interface Hero {
    name: string;
    skill: string;
}
const human: Pick<Hero, 'name'> = {
    name: '스킬이 없는 사람',
};

// Omit : 타입은 특정 타입에서 지정된 속성만 제거한 타입을 정의
interface AddressBook {
    name: string;
    phone: number;
    address: string;
    company: string;
}
const phoneBook: Omit<AddressBook, 'address'> = {
    name: '재택근무',
    phone: 12342223333,
    company: '내 방'
}
const chingtao: Omit<AddressBook, 'address'|'company'> = {
    name: '중국집',
    phone: 44455557777
}