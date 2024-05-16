


import React from 'react';
import { Upcount } from './Upcount'; 
import { Downcount } from './Downcount'; 

export {Mems}

const Mems = ({ count }) => {
    const mems = [
        {
            title: "Mem 1",
            upvotes: count, 
            downvotes: count, 
            img: "path/to/image1.png"
        
        },
        {
            title: "Mem 2",
            upvotes: count,
            downvotes: count,
            img: "path/to/image2.png"
        },
        {
            title: "Mem 3",
            upvotes: count,
            downvotes: count,
            img: "path/to/image3.png"
        }
    ];

    return (
        <div>
            {mems.map((mem, title) => (
                <div key={title}>
                    <h3>{mem.title}</h3>
                    <p>Upvotes: {mem.upvotes}</p>
                    <p>Downvotes: {mem.downvotes}</p>
                    <img src={mem.img} alt={mem.title} />
                </div>
            ))}
        </div>
    );
};

export default Mems;