let firstname : string = 'kim';
// 변수명 : 타입명 순으로 지정함
// 타입은 위 그림 참고

let firstname1 : string = 'kim';
// firstname1 = 100;
// 타입스크립트에서는 타입을 검사하므로, 해당 경우는 허용되지 않음

// number
let num1: number = 123;

// string
let str1: string = "hello";

// boolean
let bool1 : boolean = true;
let bool2 : boolean = false;


let numA: 10 = 10;

// 변수 numA의 타입을 숫자 10으로 설정. 이렇게 설정하면 이제 numA에는 10 이외의 값을 저장할 수 없음

let strA: "hello" = "hello";
let boolA: true = true;
let boolB: false = false;


let numArr: number[] = [1, 2, 3]
let strArr: string[] = ["hello", "im", "geonwoo"];
// 배열 이름 : 배열 타입으로 선언


let multiArr: (number | string)[] = [1, "hello"];
// 여러 타입의 요소가 배열에 들어올 경우 : 유니온 연산 활용


let doubleArr : number[][] = [
    [1, 2, 3], 
    [4, 5],
];
// 다차원 배열


let tup2: [number, string, boolean] = [1, "hello", true];
// 튜플을 쓰는 이유 : 입력, 저장에 용이

// 객체
let user : object = {
    id: 1,
    name: "park",
};

//any 타입 : 어떠한 타입 검사도 받지 않는 타입, 아무 타입의 값이나 범용적으로 담아 사용 가능
// unknown 타입 : any보다 안전함. 모든 값을 unknown 타입에 넣을 수 있지만, 반대는 안됨
let anyVar: any = 10;
anyVar = "hello";