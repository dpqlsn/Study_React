// 01 

export default function App() {
    const books = [
        {
            title: "The Little Prince",
            author: "Antoine de Saint-Exupéry",
            genre: "Novel, Fantasy",
            year: 1943,
            image: "https://example.com/little-prince.jpg"
        },
        {
            title: "1984",
            author: "George Orwell",
            genre: "Dystopian, Science Fiction",
            year: 1949,
            image: "https://example.com/1984.jpg"
        }
    ];
    // props를 만들어서 위 값을 전달

    return (
    <div>
        <h1>My Favorite Books</h1>
        {books.map((book, index) => (
            <Book key={index} {...book} />
        ))}
    </div>
    );}

// 개뱔 책 정보를 렌더링
function Book({ title, author, genre, year, image }) {
    return (
        <div className="book">
            <h2>{title}</h2>
            <img src={image} alt={title} />
            <p><b>Author:</b> {author}</p>
            <p><b>Genre:</b> {genre}</p>
            <p><b>Year:</b> {year}</p>
        </div>
    );
}

// 02

function UserGreeting({ role }) {
    let message;
    // if 문을 사용하여 role 에 따른 값 출력
    if (role === "admin") {
        message = "관리자님, 환영합니다!";
    } else if (role === "member") {
        message = "회원님, 환영합니다!";
    } else {
        message = "방문자님, 환영합니다!";
    }

    return <div>{message}</div>;
}

export default function App() {
    return (
    <div>
        <UserGreeting role="admin" />
        <UserGreeting role="member" />
        <UserGreeting role="guest" />
    </div>
    );
}

// 03

function Weather({ condition }) {
    // 날씨 상태에 따라 다른 값을 설정
    let sky, temperature, advice;

    if (condition === "sunny") {
        sky = "Clear and bright";
        temperature = "Warm";
        advice = "Wear sunglasses";
    } else if (condition === "rainy") {
        sky = "Cloudy with rain";
        temperature = "Cool";
        advice = "Carry an umbrella";
    } else {
        sky = "Overcast";
        temperature = "Mild";
        advice = "Might need a jacket";
    }

    return (
    <section>
        <h1>Weather Condition</h1>
        <dl>
            <dt>Sky</dt>
            <dd>{sky}</dd> // 상태값 출력
            <dt>Temperature</dt>
            <dd>{temperature}</dd>
            <dt>Advice</dt>
            <dd>{advice}</dd>
        </dl>
    </section>
    );}

export default function WeatherApp() {
    return (
    <div>
        <Weather condition="sunny" />
        <Weather condition="rainy" />
        <Weather condition="cloudy" />
    </div>
    );
}

// 04

// Task.js
function Task({ title, steps }) {
    return (
    <div>
        <h2>{title}</h2>
        <ul>
            {steps.map((step, index) => ( 
            <li key={index}>{step}</li> // map 함수를 사용하여 값을 전달
        ))}
        </ul>
    </div>
    );
}

// TaskList.js
import { tasks } from './data.js';
import Task from './Task.js';

export default function TaskList() {
    return (
    <div>
        <h1>Task List</h1> 
        {tasks.map(task => (
            <Task key={task.id} title={task.title} steps={task.steps} />  // 값 출력
        ))}
    </div>);
}

// 05

export default function Dashboard({ user }) {

return (
    <div className="dashboard">
      <UserInfo user={currentUser} /> // user 정보를 자식 컴포넌트에 props로 전달 
      <UserPicture user={currentUser} /> // user 정보를 자식 컴포넌트에 props로 전달
    </div>
);}

function UserInfo({ user }) {
  return <h2>Welcome, {user.name}!</h2>;  // props로 받은 user 사용
}

function UserPicture({ user }) {
    return (
            <img
            src={getUserProfilePic(user)}  // props로 받은 user 사용
            alt={user.name}
            width={100}
            height={100}
        />
    );
}
