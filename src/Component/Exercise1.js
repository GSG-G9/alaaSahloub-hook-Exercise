import React, {useState} from 'react'

export default function Counter() {
    
    const [count , setCount] = useState(0);

    return (
        <div>
            <h2>--Exercise 1</h2>
            <button onClick={()=>setCount(count + 1)}>increment</button>
            <button onClick={()=>setCount(count -1 )}>decrement</button>
            <button onClick={()=>setCount(0)}>reset</button>
            <p>Count: {count}</p>
        </div>
    )
}
