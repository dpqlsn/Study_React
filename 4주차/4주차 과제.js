// ✅ 문제 1: 사용자 이름 변경하기
// 버튼을 클릭하면 사용자 이름을 "Peter"으로 변경하세요.

import React, { useState } from "react";

function App() {
    const [user, setUser] = useState({
        name: "John",
        age: 18,
    });

    const handleClick = () => {
        setUser(prevUser =>({...prevUser, name : " Peter "}))
        // 복사한 값을 받아와서 peter로 변경
    };

    return (
        <div>
        <p>이름: {user.name}</p>
        <p>나이: {user.age}</p>
        <button onClick={handleClick}>이름 변경</button>
        </div>
    );
    }

// ✅ 문제 2: 카트에 상품 추가하기
// 버튼을 클릭하면 cart 배열에 "사과"를 추가하세요.

import React, { useState } from "react";

function App() {
const [cart, setCart] = useState([]);

    const handleAddApple = () => {
        setCart(prevCart => [...prevCart, "사과"]);
        // 복사한 값을 가져와서 사과추가
    };

    return (
        <div>
        <button onClick={handleAddApple}>사과 추가</button>
        <ul>
            {cart.map((item, index) => (
            <li key={index}>{item}</li>
            ))}
        </ul>
        </div>
);}

// ✅ 문제 3: 할 일 완료 상태 변경하기
// id가 2인 항목의 completed를 true로 바꾸세요.

import React, { useState } from "react";

function App() {
const [todos, setTodos] = useState([
        { id: 1, text: "청소하기", completed: false },
        { id: 2, text: "공부하기", completed: false },
    ]);

    const handleComplete = () => {
        setTodos((prevTodos) =>
        prevTodos.map((todo) =>
            todo.id === 2 ? { ...todo, completed: true } : todo
            // id가 2인지 판별하고 맞으면 값을 true 로 아니면 그냥 놔둠
        )
        );
    };

    return (
        <div>
        <button onClick={handleComplete}>2번 완료 처리</button>
        <ul>
            {todos.map((todo) => (
            <li key={todo.id}>
                {todo.text} - {todo.completed ? "완료" : "미완료"}
            </li>
            ))}
        </ul>
        </div>
    );
}


// ✅ 문제 4: 사용자 나이 증가시키기
// 버튼 클릭 시 user.age를 1 증가시키세요.

import React, { useState } from "react";

function App() {
const [user, setUser] = useState({
        name: "Jane",
        age: 20,
    });

    const handleAgeUp = () => {
        setUser((prevUser) => ({ ...prevUser, age: prevUser.age + 1 }));
        // +1을 해서 나이가 증가됨
    };

    return (
        <div>
        <p>
            {user.name} ({user.age}세)
        </p>
        <button onClick={handleAgeUp}>나이 증가</button>
        </div>
);}

// ✅ 문제 5: 배열 항목 삭제하기
// 배열에서 "cat" 항목을 삭제하세요.

import React, { useState } from "react";

function App() {
const [animals, setAnimals] = useState(["dog", "cat", "bird"]);

const handleRemoveCat = () => {
        setAnimals((prevAnimals) =>
        prevAnimals.filter((animal) => animal !== "cat")
        // 필터를 사용해서 고양이 없애기
        );
    };

    return (
        <div>
        <button onClick={handleRemoveCat}>고양이 제거</button>
        <ul>
            {animals.map((animal, index) => (
            <li key={index}>{animal}</li>
            ))}
        </ul>
        </div>
    );
}


// ✅ 문제 6-1. useState Hook에 대해 설명하시오
// useState는 React의 Hook 중 하나로, 함수형 컴포넌트에서 상태 관리를 해줌

// ✅ 문제 6-2. React 컴포넌트에 대해 설명하시오
// React 컴포넌트는 UI를 구성하는 독립적인 단위로, 재사용 가능한 코드 블록

// ✅ 문제 6-3. React Virtual DOM의 정의와 동작 방식에 대해 설명하시오
// 리액트에서 사용하는 가상의 돔이다, 가상 돔이란 실제 DOM을 조작하는 것이 아닌 DOM을 모방한 가상의 DOM을 구성해 원래 DOM과 비교하여 달라진 부분을 리렌더링 하는 방식