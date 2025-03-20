// 인터페이스 

let person = { name: 'Capt', age: 28 };
function logAge(obj: { age: number }) {
    console.log(obj.age); // 28
}
  logAge(person); // 28
// 이렇게 인자를 받을 때 단순한 타입 뿐만 아니라 객체의 속성 타입까지 정의가능

// 옵션 속성
// 장점 : 단순히 인터페이스를 사용할 때 속성을 선택적으로 적용할 수 있다는 것 뿐만 아니라 인터페이스에 정의되어 있지 않은 속성에 대해서 인지

interface 인터페이스_이름 {
    속성?: number;
}

// 읽기 전용 속성
// 인터페이스로 객체를 처음 생성할 때만 값을 할당하고 그 이후에는 변경할 수 없는 속성

// 객체 선언과 관련된 타입 체킹
// 타입스크립트는 인터페이스를 이용하여 객체를 선언할 때 좀 더 엄밀한 속성 검사를 진행

// 함수 타입
interface login {
    (username: string, password: string): boolean;
}

// 클래스 타입
// C#이나 자바처럼 타입스크립트에서도 클래스가 일정 조건을 만족하도록 타입 규칙을 정할 수 있음
interface CraftBeer {
    beerName: string;
    nameBeer(beer: string): void;
}

class myBeer implements CraftBeer {
    beerName: string = 'Baby Guinness';
    nameBeer(b: string) {
        this.beerName = b;
    }
    constructor() {}
}

// 인터페이스 확장
// 여러 인터페이스 상속받아서 사용 가능
interface Person {
    name: string;
}
interface Developer extends Person {
    skill: string;
}
let fe = {} as Developer;
fe.name = 'josh';
fe.skill = 'TypeScript';

// 하이브리드 타입
// 자바스크립트의 유연하고 동적인 타입 특성에 따라 인터페이스 역시 여러 가지 타입을 조합가능