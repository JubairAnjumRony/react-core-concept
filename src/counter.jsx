import { useState } from "react"

export default function Counter(){
    const [count,setCount] = useState(5);
    console.log(count,setCount);

    const handleAdd = ()=>{
        const newCount =count+1;
        setCount(newCount);
    }
    const handleReduce =()=>{
        const newCount =count-1;
        setCount(newCount);
    }
    return (
        <div>
            <div style ={{border:'2px solid yellow'}}> 
                    <h3>Counter:{count}</h3>
          <button onClick ={handleAdd}>Add</button>
          <button onClick ={handleReduce}>Reduce</button>
          </div> 
        </div>
    )
}