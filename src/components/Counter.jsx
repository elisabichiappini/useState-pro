import { useState } from 'react';

export default function Counter() {
    const [count, setCount] = useState(0);
    function handleIncrement() {
        alert("incrementa");
    }

    return (
        <div>
            <p>Conteggio: {count}</p>
            <button onClick={handleIncrement}>+</button>
            <button onClick={() => alert("decrementa")}>-</button>
        </div>
    )
}

