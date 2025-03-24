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

// 화이트 & 다크모드

export default function LightSwitch() {
    function handleClick() {
        let bodyStyle = document.body.style;
        if (bodyStyle.backgroundColor === 'black') {
        bodyStyle.backgroundColor = 'white';
        } else {
        bodyStyle.backgroundColor = 'black';
        }
    }

    return (
    <button onClick={handleClick}>
        Toggle the lights
    </button>
    );}
