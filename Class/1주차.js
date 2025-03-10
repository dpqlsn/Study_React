/* React를 배워야하는 이유
- 개발 생산성과 유지보수성 향상 : React는 컴포넌트 기반 아키텍처를 제공하여 UI를 재사용 가능하게 만들고, 코드의 유지보수 용이함
- 가상 DOM을 활용한 최적화 : 가상 DOM(Virtual DOM)은 변경된 부분만 효율적으로 업데이트하여 성능 개선 효과가 있음
- 생태계와 커뮤니티 지원 : React는 대규모 커뮤니티와 다양한 라이브러리를 보유하고 있어 개발 속도를 높이고 다양한 문제 해결 가능함
- 취업 시장에서 요구하는 프레임워크 
*/

/* 컴포넌트
- 태그들을 반환하는 함수
- 컴포넌트는 다른 컴포넌트를 렌더링할 수 있지만, 그 정의를 중첩해서는 안 됨
*/

export default function Gallery() {
    // 🔴 절대 컴포넌트 안에 다른 컴포넌트를 정의하면 안 됩니다!
    function Profile() {
      // ...
    }
    // ...
}

export default function Gallery() {
    // ...
    }
  // ✅ 최상위 레벨에서 컴포넌트를 선언합니다
    function Profile() {
    // ...
}

// 컨포넌트 사용

export default function Congratulations(){
    return(
        <h1>Good job!</h1>
    );
}