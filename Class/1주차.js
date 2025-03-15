// React를 배워야하는 이유
//개발 생산성과 유지보수성 향상 : React는 컴포넌트 기반 아키텍처를 제공하여 UI를 재사용 가능하게 만들고, 코드의 유지보수 용이함
// 가상 DOM을 활용한 최적화 : 가상 DOM(Virtual DOM)은 변경된 부분만 효율적으로 업데이트하여 성능 개선 효과가 있음
// 생태계와 커뮤니티 지원 : React는 대규모 커뮤니티와 다양한 라이브러리를 보유하고 있어 개발 속도를 높이고 다양한 문제 해결 가능함
// 취업 시장에서 요구하는 프레임워크 

// 컴포넌트
// 태그들을 반환하는 함수
// 컴포넌트는 다른 컴포넌트를 렌더링할 수 있지만, 그 정의를 중첩해서는 안 됨
// 파일이 많으면 경로를 탐색하기 어렵기 때문에 import 와 export 사용

export default function Gallery() {
    // 🔴 절대 컴포넌트 안에 다른 컴포넌트를 정의하면 안 됨
    function Profile() {
      // ...
    }
    // ...
}

export default function Gallery() {
    // ...
    }
  // ✅ 최상위 레벨에서 컴포넌트를 선언
    function Profile() {
    // ...
}

// 컨포넌트 사용

export default function Congratulations(){
    return(
        <h1>Good job!</h1>
    );
}

// 컨포넌트 import 및 export

function Profile() {
    return (
    <img
        src="https://i.imgur.com/MK3eW3As.jpg"
        alt="Katherine Johnson"
    />
    );
}

export default function Gallery() {
    return (
        <section>
            <h1>Amazing scientists</h1>
            <Profile />
            <Profile />
            <Profile />
        </section>
    );
}

/* 하는 방법 
1. 컴포넌트를 추가할 JS 파일을 생성
2. 새로 만든 파일에서 함수 컴포넌트를 export
3. 컴포넌트를 사용할 파일에서 import
*/

// 컴포넌트 순수하게 유지하기
// 자신의 일만 처리 : 호출되기 전에 존재했던 어떤 객체나 변수도 변경하지 않음
// 입력이 같으면 출력 같음 : 순수 함수는 같은 입력을 받으면 언제나 같은 결과를 반환

// JSX
// React가 브라우저에 렌더링하는 마크업을 포함할 수 있는 JavaScript 함수

// 하나의 큰 요소인 부모태그로 감싸야함
<div>
<h1>Hedy Lamarr's Todos</h1>
    <img
        src="https://i.imgur.com/yXOvdOSs.jpg"
        alt="Hedy Lamarr"
        class="photo"
    />
    <ul>
        ...
    </ul>
</div>

// 조건부 렌더링
// 컴포넌트는 조건에 따라 다른 항목을 표시해야할 경우가 많음, if 문, && 및 ? : 연산자 를 사용하면 가능

// 리스트 렌더링
// 데이터 모음으로부터 유사한 컴포넌트를 여러 개 표시하고 싶을 때 filter()와 map() 사용

// 렌더트리
// 랜더 트리란 웹 페이지에 표시될 HTML 요소들과 CSS 스타일 요소들로 구성 됨, 브라우저는 DOM과 CSSOM이 결합하여 렌더트리를 만듦
// 렌더트리는 웹 페이지에 나타낼 각 요소들의 위치를 계산하는데 사용되고 화면에 렌더링하는 요소들을 표현하고 그려질 그래픽을 계산

// 최상위 컴포넌트 : 트리 상단에 위치한 컴포넌트와 루트 컴포넌트 근처의 컴포넌트를 최상위 컴포넌트라 함
// 리프트 컴포넌트 : 자식 컴포넌트가 없는 컴포넌트



// props
/*
1. Props를 전달하려면 HTML 어트리뷰트를 사용할 때와 마찬가지로 JSX에 props를 추가
2. Props를 읽으려면 구조 분해 할당 문법을 사용
3. size = 100 과 같은 기본값을 지정할 수 있으며, 이는 누락되거나 undefined 인 props에 사용됨
4. Props는 읽기 전용 스냅샷으로, 변경할 때마다 새로운 버전의 props를 받음
5. Props는 변경이 불가능함, 상호작용이 필요한 경우 state 설정하여 사용
*/

import { getImageUrl } from './utils.js';

function Profile({
    imageId,
    name,
    profession,
    awards,
    discovery,
    imageSize = 70
    }) {
    return (
        <section className="profile">
        <h2>{name}</h2>
        <img
            className="avatar"
            src={getImageUrl(imageId)}
            alt={name}
            width={imageSize}
            height={imageSize}
        />
        <ul>
            <li><b>Profession:</b> {profession}</li>
            <li>
            <b>Awards: {awards.length} </b>
            ({awards.join(', ')})
            </li>
            <li>
            <b>Discovered: </b>
            {discovery}
            </li>
        </ul>
        </section>
    );
}

    export default function Gallery() {
    return (
        <div>
        <h1>Notable Scientists</h1>
        <Profile
            imageId="szV5sdG"
            name="Maria Skłodowska-Curie"
            profession="physicist and chemist"
            discovery="polonium (chemical element)"
            awards={[
            'Nobel Prize in Physics',
            'Nobel Prize in Chemistry',
            'Davy Medal',
            'Matteucci Medal'
            ]}
        />
        <Profile
            imageId='YfeOqp2'
            name='Katsuko Saruhashi'
            profession='geochemist'
            discovery="a method for measuring carbon dioxide in seawater"
            awards={[
            'Miyake Prize for geochemistry',
            'Tanaka Prize'
            ]}
        />
        </div>
    );
}