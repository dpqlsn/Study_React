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

// JSX

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