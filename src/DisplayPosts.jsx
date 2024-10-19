import './friends.css'

export default function DisplayPosts({posts}){
    const{userId,id,title,body} = posts;

    return(
        <div className="box"> 
         
            <h5>Titlle: {title} </h5>
            <p><small>userId:{userId} </small></p>
            <p><small>Id: {id}</small></p>
            <p><small>Body: {body}</small></p>
        </div>
    )
}