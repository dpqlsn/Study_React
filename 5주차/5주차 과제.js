// 과제 1
import { useRef } from 'react';

export default function ColorBox() {
    const changeboxRef = useRef(null);

    const handleClick = () => {
        if (changeboxRef.current) {
            changeboxRef.current.style.backgroundColor = 'pink';
            // 만약 버튼을 누르면 백그라운드가 핑크색으로 바뀌도록 함   
        }
    };

    return (
        <>
            <button onClick={handleClick}>
                배경색 바꾸기
            </button>
            <div
                ref={changeboxRef}
                style={{
                    width: '200px',
                    height: '100px',
                    marginTop: '10px',
                    backgroundColor: 'lightgray'
                }}
            >
                나는 박스입니다
            </div>
        </>
    );
}

// 과제 2

import { useRef } from 'react';

export default function ScrollToBox() {
    const scrollRef = useRef(null);

    const handleScroll = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollView({ behavior: 'smooth' });
            // 누르면 스무스하게 내려가도록
            }
        };

    return (
        <>
        <button onClick={handleScroll}>
            맨 아래로 스크롤
        </button>

        <div style={{ height: '500px', border: '1px solid black', marginTop: '20px' }}>Box 1</div>
        <div style={{ height: '500px', border: '1px solid black', marginTop: '20px' }}>Box 2</div>
        <div style={{ height: '500px', border: '1px solid black', marginTop: '20px' }}>Box 3</div>

        <div
            ref={scrollRef} // ref 연결
            style={{ height: '500px', border: '1px solid black', marginTop: '20px' }}
        >
            Box 4 (여기로 스크롤)
        </div>
        </>
    );
    }

// 과제 3
import { useState } from 'react';

export default function CatFriends() {
    const [index, setIndex] = useState(0);
    return (
        <>
        <nav>
            <button onClick={() => {
            if (index < catList.length - 1) {
                setIndex(index + 1);
                // index가 마지막 고양이보다 크기가 작으면 +1
            } else {
                setIndex(0);
                // 마지막 고양이면 0으로 초기화
            }
            }}>
            Next
            </button>
        </nav>
        <div>
            <ul>
            {catList.map((cat, i) => (
                <li key={cat.id}>
                <img
                    className={
                    index === i ?
                    // 조건이 만족할 때 선택된 이미지
                        'active' :
                        ''
                    }
                    src={cat.imageUrl}
                    alt={'Cat #' + cat.id}
                />
                </li>
            ))}
            </ul>
        </div>
        </>
    );
    }

    const catList = [];
    for (let i = 0; i < 10; i++) {
    catList.push({
        id: i,
        imageUrl: 'https://loremflickr.com/250/200/cat?lock=' + i
    });
}

// 과제 4
// ✅ useState 훅이란 :  React에서 DOM 요소나 값을 참조하기 위해 사용하는 훅으로 렌더링 없이 값지정을 할 때 사용함
// ✅ useState & useRef 차이점 : useRef는 다시 렌더링되지 않고 .current를 통해 직접 접근한다면
//                             useState는 상태 값으로 저장하고 상태가 바뀌면 컴포넌트가 다시 렌더링됨

// 과제 5

import { useEffect } from 'react';

export default function Welcome() {
    useEffect (() => {
        console.log("환영합니다!")
    });
  // TODO: 컴포넌트가 처음 렌더링될 때 콘솔에 "환영합니다!" 출력

    return <h1>Welcome Page</h1>;
}
