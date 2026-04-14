import React, { useState } from "react";

export default function CounterApp() {
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);

    const decrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    const reset = () => setCount(0);

    return (
        <div>
            <p>Count: {count}</p>

            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
}