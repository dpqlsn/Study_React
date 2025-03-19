// 타입스크립트의 기본 타입

// 문자열
// 이래와 같이 :를 이용하여 자바스크립트 코드에 타입을 정의하는 방식을 타입 표기(Type Annotation)
let str: string = 'hi';

// 숫자
let num: number = 10;

//진위
let isLoggedIn: boolean = false;

// 객체
// 다만, 객체 타입은 아래와 같이 정의하는 것보다 인터페이스나 타입 별칭을 쓰는 것이 더 좋음
let user: object = { name: 'capt', age: 100 };

// 배열
let arr1: number[] = [1,2,3];
let arr2: Array<number> = [1,2,3];

// 튜플
let arr: [string, number] = ['hi', 10];

// 이넘
// C, Java와 같은 다른 언어에서 흔하게 쓰이는 타입으로 상수들의 집합, 인덱스 번호로도 접근 가능,  사용자 편의로 변경하여 사용 가능
enum Avengers { 
    Capt, 
    IronMan, 
    Thor 
}

let hero: Avengers = Avengers.Capt;

// any
// any 타입은 모든 타입에 사용할 수 있는 치트키 같은 타입이지만 과도한 사용은 오류가 생길 수 있음
let str1: any = 'hi';
let num1: any = 10;
let arr3: any = ['a', 2, true];

// void
// 반환 값이 없는 함수의 반환 타입
function printSomething(): void {
    console.log('sth');
}

function returnNothing(): void {
    return;
}

// never
// 절대 발생하지 않는 값을 의미하는 타입
// ex ) 함수가 반복문이나 에러 핸들링으로 인해 함수의 끝에 절대 도달하지 않는 경우
function loopForever(): never {
    while (true) {
      // ..
    }
}

function neverEnd(): never {
    throw new Error('unexpected');
}