function AlertButton({ message, children }) {
    return (
    <button onClick={() => alert(message)}>
        {children}
    </button>
    );
}

export default function Toolbar() {
    return (
    <div>
        <AlertButton message="Playing!">
            Play Movie
        </AlertButton>
        <AlertButton message="Uploading!">
            Upload Image
        </AlertButton>
    </div>
    );
}

// 이벤트 핸들러 Props로 전달하기

function Button({ onClick, children }) {
    return (
        <button onClick={onClick}>
            {children}
        </button>
        );
    }
    
    function PlayButton({ movieName }) {
        function handlePlayClick() {
        alert(`Playing ${movieName}!`);
        }
    
        return (
        <Button onClick={handlePlayClick}>
            Play "{movieName}"
        </Button>
        );
    }
    
    function UploadButton() {
        return (
        <Button onClick={() => alert('Uploading!')}>
            Upload Image
        </Button>
        );
    }
    
    export default function Toolbar() {
        return (
        <div>
            <PlayButton movieName="Kiki's Delivery Service" />
            <UploadButton />
        </div>
        );
    }

// 이벤트 전파

export default function Toolbar() {
    return (
    <div className="Toolbar" onClick={() => {
        alert('You clicked on the toolbar!');
    }}>
        <button onClick={() => alert('Playing!')}>
            Play Movie
        </button>
        <button onClick={() => alert('Uploading!')}>
            Upload Image
        </button>
    </div>
);}

// useState 를 활용한 화이트 & 다크모드

import { useState } from 'react';

export default function LightSwitch() {
    const [isDark, setIsDark] = useState(false);

    function handleClick() {
        setIsDark(prevIsDark => !prevIsDark);
    }

    return (
        <div style={{ backgroundColor: isDark ? 'black' : 'white', height: '100vh'}}>
            <button onClick={handleClick}>
                Toggle the lights
            </button>
        </div>
    );
}

import React, { useState } from 'react';

function App() {
        const [isDark, setIsDark] = useState(false);

    const toggleMode = () => {
        setIsDark(prevIsDark => !prevIsDark);
    };

    return (
        <div
        style={{
            backgroundColor: isDark ? '#333' : '#fff',
            color: isDark ? '#fff' : '#000',
            height: '100vh',
            padding: '2rem',
            transition: '0.3s'
        }}
        >
        <h1>{isDark ? '🌙 다크 모드' : '☀️ 라이트 모드'}</h1>
        <button onClick={toggleMode}>
            {isDark ? '라이트 모드로 전환' : '다크 모드로 전환'}
        </button>
        </div>
    );
}

// 입력 값 반영하기

import React, { useState } from 'react';

    function App() {
    const [text, setText] = useState('');

    return (
        <div>
        <input
            value={text}
            onChange={(e) => {
            setText(e.target.value);
            }}
        />
        <p>현재 입력한 내용: {text}</p>
        </div>
    );
}

// 리스트에 항목 추가하기 

import React, { useState } from 'react';

function App() {
    const [item, setItem] = useState('');
    const [list, setList] = useState([]);

    const handleAdd = () => {
        if (item.trim() !== '') {
        setList([...list, item]);
        setItem(''); 
        }
    };

    return (
        <div>
        <input
            value={item}
            onChange={(e) => setItem(e.target.value)}
        />
        <button onClick={handleAdd}>추가</button>
        <ul>
            {list.map((listItem, index) => (
            <li key={index}>{listItem}</li> 
            ))}
        </ul>
        </div>
    );
}
