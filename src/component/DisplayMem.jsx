import { useState } from 'react';

import Mems from './Mems';



export function DisplayMem(){
    const [count, setCount] = useState(1)

    const changeCountHandler = e => {
        setCount(e.target.value)
    }


return (
    <div>
    {   
       <div> <Mems count={count}/></div>

        

    }
    </div>
);

}