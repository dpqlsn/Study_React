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
