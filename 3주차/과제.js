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
