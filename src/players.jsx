import { useState } from "react";

export default function Players(){
    const [count,setTeam] = useState(11);

    const style ={
        border: '2px solid red',
        padding:'20px',
        margin:'10px',
        bordrRadius:'22px'
    }
    const addPlayer =() =>{
        setTeam(count+1);
    }
    const reducePlayer =() =>{
        setTeam(count-1);
    }

    return(
        <div>
            <div style = {style} >
            <h3>Players: {count}</h3>
            <button onClick={addPlayer}>Add</button>
            <button onClick={reducePlayer}>Remove</button>
            </div>
            </div>
    )
}

//function useState ()=>{
//     function setCount(count){
//         count =count-1;
//     }
//     return(count,setCount);
// }