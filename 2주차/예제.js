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
    