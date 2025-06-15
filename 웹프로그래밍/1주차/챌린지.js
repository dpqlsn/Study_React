// 01 Objects are not valid as a React child 오류 발생

import { getImageUrl } from './utils.js';

    function Profile({
    imageId,
    name,
    profession,
    awards,
    discovery,
    imageSize = 70 
    // Profile 에는 다양한 props 허용, imageSize prop에는 기본값이 있으므로, 컴포넌트에 전달안함
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


// 02 prop에 따라 이미지 크기 조정하기 

import { getImageUrl } from './utils.js';

    function Avatar({ person, size }) {
    let thumbnailSize = 's';
    if (size > 90) {
        thumbnailSize = 'b'; 
        // 만약 size 가 90 보다 크면 b의 해상도 사용
    }
    return (
        <img
        className="avatar"
        src={getImageUrl(person, thumbnailSize)}
        alt={person.name}
        width={size}
        height={size}
        />
    );
    }

    export default function Profile() {
    return (
        <>
        <Avatar
            size={40}
            person={{
            name: 'Gregorio Y. Zara',
            imageId: '7vQD0fP'
            }}
        />
        <Avatar
            size={120}
            person={{
            name: 'Gregorio Y. Zara',
            imageId: '7vQD0fP'
            }}
        />
        </>
    );
    }

// 03 children prop에 JSX 전달하기 

    function Card({ children }) {
        return (
        <div className="card">
            <div className="card-content">
            {children} // children props 사용해 쉽게 접근 가능
            </div>
        </div>
        );
    }
    
    export default function Profile() {
        return (
        <div>
            <Card>
            <h1>Photo</h1>
            <img
                className="avatar"
                src="https://i.imgur.com/OKS67lhm.jpg"
                alt="Aklilu Lemma"
                width={100}
                height={100}
            />
            </Card>
            <Card>
            // Card 컴포넌트 하나로 관리
            <h1>About</h1>
            <p>Aklilu Lemma was a distinguished Ethiopian scientist who discovered a natural treatment to schistosomiasis.</p>
            </Card>
        </div>
        );
    }
    
