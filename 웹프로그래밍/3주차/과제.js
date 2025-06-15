// 좋아요 토글 버튼 

import { useState } from "react";

export default function LikeButton() {
    const [liked, setLiked] = useState(false);
    const [count, setCount] = useState(0);
    const [off, setOff] = useState(false);

    const toggleLike = () => {
        setLiked(!liked);
        // 좋아요 하트 색
        setCount((prev) => (liked ? prev - 1 : prev + 1)); 
        // 카운트
        setOff(!off);
        // on, off 띄우기
    };

    return (
        <>
        <p>{off ? "off" : "on"}</p>
        <button onClick={toggleLike}>
            <span>{liked ? "❤️" : "🤍"}</span>
            <span>{count}</span>
        </button>
        </>
    );
}


// 증감 카운터

import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);

    const increase = () => {
        setCount((prev) => (prev < 10 ? prev + 1 : prev));
        // 10 을 초과하는지 확인 후 오르게 하기
    };

    const decrease = () => {
        setCount((prev) => (prev > 0 ? prev - 1 : prev));
        // 0 보다 작아지지 않는지 확인
    };

    return (
        <div>
        <button onClick={decrease} >-</button>
        <span>{count}</span>
        <button onClick={increase}>+</button>
        </div>
    );}

// 투표 버튼

import { useState } from "react";

export default function VoteButtons() {
    const [upvotes, setUpvotes] = useState(0);
    const [downvotes, setDownvotes] = useState(0);

    return (
        <div className="">
        <button onClick={() => setUpvotes(upvotes + 1)}>👍 {upvotes}</button>
        <button onClick={() => setDownvotes(downvotes + 1)}>
            // 투표 하면 값이 1씩 오르도록 
            👎 {downvotes}
        </button>
        </div>
    );
}

// 투두

import { useState } from "react";

    export default function Checklist() {
    const items = ["공부하기", "청소하기", "운동하기"];
    const [checkedItems, setCheckedItems] = useState([]);

    const toggleCheck = (item) => {
        setCheckedItems((prev) =>
        prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
        // 필터로 체크표시 
        );
    };

    return (
        <div>
        {items.map((item) => (
            <label key={item}>
            <input
                type="checkbox"
                checked={checkedItems.includes(item)}
                onChange={() => toggleCheck(item)}
            />
            <span
                style={{
                fontWeight: checkedItems.includes(item) ? "bold" : "normal",
                // 체크 시 글씨체 볼드 바꾸기
                }}
            >
                {item}
            </span>
            </label>
        ))}
        </div>
    );
    }
