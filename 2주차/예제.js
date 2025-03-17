// 삼항연산자 사용

function Item({ name, isPacked }) {
        return (
        <li className="item">
            {name} {isPacked ? '✅' : '❌'}
            // 참이면 ✅, 아니면 ❌ 출력
        </li>
        );
    }
    
    export default function PackingList() {
        return (
        <section>
            <h1>Sally Ride's Packing List</h1>
            <ul>
            <Item
                isPacked={true}
                name="Space suit"
            />
            <Item
                isPacked={true}
                name="Helmet with a golden leaf"
            />
            <Item
                isPacked={false}
                name="Photo of Tam"
            />
            </ul>
        </section>
        );
    }
    

// 항목의 중요한 정도를 &&로 표시

function Item({ name, importance }) {
        return (
        <li className="item">
            {name}
            {importance > 0 && ' '}
            // 두 레이블 사이에 공백을 넣기 위해 사용
            {importance > 0 &&
            <i>Importance: {importance})</i>
            // importanc 가 0 이면 결과로는 0이 렌더링 되지 않기 때문에 위 코드로 작성
            }
        </li>
        );
    }
    
    export default function PackingList() {
        return (
        <section>
            <h1>Sally Ride's Packing List</h1>
            <ul>
            <Item
                importance={9}
                name="Space suit"
            />
            <Item
                importance={0}
                name="Helmet with a golden leaf"
            />
            <Item
                importance={6}
                name="Photo of Tam"
            />
            </ul>
        </section>
        );
    }
    
// 변수와 일련의 ? :를 if로 리팩토링

    function Drink({ name }) {
        let part, caffeine, age;
        if (name === 'tea') {
        part = 'leaf';
        caffeine = '15–70 mg/cup';
        age = '4,000+ years';
        } 
        if (name === 'coffee') {
        part = 'bean';
        caffeine = '80–185 mg/cup';
        age = '1,000+ years';
        }
        return (
        <section>
            <h1>{name}</h1>
            <dl>
            <dt>Part of plant</dt>
            <dd>{part}</dd>
            <dt>Caffeine content</dt>
            <dd>{caffeine}</dd>
            <dt>Age</dt>
            <dd>{age}</dd>
            </dl>
        </section>
        );
    }
    
    export default function DrinkList() {
        return (
        <div>
            <Drink name="tea" />
            <Drink name="coffee" />
        </div>
        );
    }

// 필터 연습

const chemists = people.filter(person =>
    person.profession === 'chemist'
);

// 리스트를 둘로 나누기

    import { people } from './data.js';
    import { getImageUrl } from './utils.js';

    export default function List() {
    const chemists = people.filter(person =>
        person.profession === 'chemist'
    );
    const everyoneElse = people.filter(person =>
        person.profession !== 'chemist'
    );
    return (
        <article>
        <h1>Scientists</h1>
        <h2>Chemists</h2>
        <ul>
            {chemists.map(person =>
            <li key={person.id}>
                <img
                src={getImageUrl(person)}
                alt={person.name}
                />
                <p>
                <b>{person.name}:</b>
                {' ' + person.profession + ' '}
                known for {person.accomplishment}
                // 데이터를 리스트 아이템의 배열에 넣어줌
                </p>
            </li>
            )}
        </ul>
        <h2>Everyone Else</h2>
        <ul>
            {everyoneElse.map(person =>
            <li key={person.id}>
                <img
                src={getImageUrl(person)}
                alt={person.name}
                />
                <p>
                <b>{person.name}:</b>
                {' ' + person.profession + ' '}
                known for {person.accomplishment}
                </p>
            </li>
            )}
        </ul>
        </article>
    );
    }

// 하나의 컴포넌트에 중첩된 리스트
import { recipes } from './data.js';

export default function RecipeList() {
    return (
        <div>
        <h1>Recipes</h1>
        {recipes.map(recipe =>
            <div key={recipe.id}>
            <h2>{recipe.name}</h2>
            <ul>
                {recipe.ingredients.map(
            img => <li>{img}</li>
                )}
            </ul>
            </div>
        )}
        </div>
    );
    }

// 리스트 항목 컴포넌트 추출하기

import { recipes } from './data.js';

function Recipe({ id, name, ingredients }) {
    return (
        <div>
        <h2>{name}</h2>
        <ul>
            {ingredients.map(ingredient =>
            <li key={ingredient}>
                {ingredient}
            </li>
            )}
        </ul>
        </div>
    );}

    export default function RecipeList() {
    return (
        <div>
        <h1>Recipes</h1>
        {recipes.map(recipe =>
            <Recipe {...recipe} />
        )}
        </div>
    );}