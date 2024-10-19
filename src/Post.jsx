import { useEffect, useState } from "react";
import DisplayPosts from "./DisplayPosts";


export default function Posts(){

    const [post,setPost] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res)=>res.json())
        .then((data)=> {
            setPost(data);
            console.log(data);
    })
     ;

    },
        [])

        return(

            <div>
                <h3>Posts:{post.length}</h3>
                {
                    post.map(p=><DisplayPosts posts= {p}></DisplayPosts>)
                }
            </div>
        );
    }


