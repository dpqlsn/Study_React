// 함수
// 타입스크립트에서는 함수의 인자를 모두 필수 값으로 간주
// 함수의 매개변수를 설정하면 undefined 나 null 이라도 인자로 넘겨야 하며 컴파일러에서 정의된 매개변수 값이 넘어 왔는지 확인

function sum1(a: number, b: number): number {
    return a + b;
}
  sum1(10, 20); // 30

// this
// 타입스크립트에서 자바스크립트의 this가 잘못 사용되었을 때 감지

interface Vue {
    el: string;
    count: number;
    init(this: Vue): () => {};
}

let vm: Vue = {
    el: '#app',
    count: 10,
    init: function(this: Vue) {
        return () => {
        return this.count;
    }}
}
let getCount = vm.init();
let count = getCount();
  console.log(count); // 10

// 콜백에서의 this
// this와는 다르게 콜백 함수가 전달 됐을 때 this 구분해줘야할 때
