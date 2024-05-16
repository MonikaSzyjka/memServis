import { DisplayMem } from "../component/DisplayMem";
import { Mems } from "../component/Mems"



export function HomePage() {
    const hotFiltr = Mems.filter(mem => mem.upvotes - mem.downvotes > 5)
return(
 
<div><DisplayMem/></div>)
}