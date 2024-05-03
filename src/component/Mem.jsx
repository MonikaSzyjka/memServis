import { useState } from "react"

export function Mem() {
    const [memes, setMemes] = useState([ 
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
            
]);
return (
    <div>
        {memes.map((mem, index) => (
            <div key={index}>
                <h3>{mem.title}</h3>
                <img src={mem.img} alt={mem.title} />
                <p>Upvotes: {mem.upvotes}</p>
                <p>Downvotes: {mem.downvotes}</p>
            </div>
        ))}
    </div>
);
}

