import { useState } from "react";


export function Upcount(){
     

    const [count, setCount] = useState(0)


    const incrementUpcount = () => {
        setCount(count +1) 
    };
   
    return(
        <div>
            <p> {count}</p>
            <button onClick={incrementUpcount}>Klikanie</button>
        </div>
    )


}