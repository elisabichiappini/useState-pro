import { useState } from 'react';

export default function Counter() {
    const [count, setCount] = useState(0);
    
    function handleIncrement() { 
        setCount(count + 1);
    }

    return (
        <div>
            <p>Conteggio: {count}</p>
            <button onClick={handleIncrement}>+</button>
            <button onClick={() => {
                setCount(count - 1);
            }}>-</button>
        </div>
    )
}

