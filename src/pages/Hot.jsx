
import { DisplayMem } from "../component/DisplayMem";
import { Mems } from "../component/Mems"

export function Hot(){
    const hotFiltr = Mems.filter(mem => mem.upvotes - mem.downvotes > 5)
    return(
    
    <section>
        <h1>Hot List</h1>
        <div className="mems-container">
                {hotFiltr.map((mem, title) => (
                    <DisplayMem
                        key={title}
                        title={mem.title}
                        upvotes={mem.upvotes}
                        downvotes={mem.downvotes}
                        img={mem.img}
                    />
                ))}
            </div>
    </section>
)}








export default Hot;