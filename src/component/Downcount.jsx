import { useState } from "react";


export function Downcount(){
    const [count, setCount] = useState(0)
    const decrementCount = () => {
        setCount(count - 1)
    }
    return(
        <div>
            <p> {count}</p>
            <button onClick={decrementCount}>Klikanie odejmowanie</button>
        </div>
    )
}