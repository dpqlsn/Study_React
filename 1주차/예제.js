// 컴포넌트 

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