import { useState } from 'react';

export default function Counter() {
    let count = 0;
    
    function handleIncrement() { 
        count++;
        console.log(count);
    }

    return (
        <div>
            <p>Conteggio: {count}</p>
            <button onClick={handleIncrement}>+</button>
            <button onClick={() => {
                count--;
                console.log(count);
            }}>-</button>
        </div>
    )
}

