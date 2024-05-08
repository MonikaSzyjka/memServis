import { useState } from "react"

export function Mems(){ 
    const [mems] = useState( [ 
    
    {
        title: "Mem 1",
        upvotes: 6,
        downvotes: 0,
        img: "path/to/image1.png",
        },
    {
        title: "Mem 2",
        upvotes: 1,
        downvotes: 2,
        img: "path/to/image2.png",
        },
    {
            title: "Mem 3",
            upvotes: 1,
            downvotes: 2,
            img: "path/to/image2.png",
            },
        
])
return <div>
<h1>Mems list</h1>
    {mems.map((mems) => 
<div key={mems.title}>
        <h3>{mems.title}</h3>
        <img src={mems.img} alt="img"/>
        <p>Upvotes: {mems.upvotes}</p>
        <p>Downvotes: {mems.downvotes}</p>
</div>)}
</div>
}