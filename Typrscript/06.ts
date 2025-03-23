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