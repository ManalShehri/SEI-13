import React, {useState} from 'react'
import './style.css'
import AddPost from '../AddPost'
import { useDispatch } from "react-redux"

export default function Post(props) {
    const dispatch = useDispatch();

    const [showReply, setShowReply] = useState(false)

    const toggleReply = () => setShowReply(!showReply)

    const handleLike = () => {
        console.log(props.post.id)
        dispatch({
            type: "LIKE_POST",
            payload: props.post.id
        })
    }
    
    return (
        <div className="post">
            <div>
                <h5>{props.post.title}</h5>
                <p>{props.post.description}</p>
            </div>
            <div className="post-actions">
            <button onClick={handleLike}>Like {props.post.likes} </button>
                <button onClick={toggleReply}>Reply</button>
            </div>
            {showReply && <AddPost postId={props.post.id} reply={true}/>}
            <hr/>
            {props.post.comments.map(comment => {
                return <p key={comment.id}>{comment.description}</p>
            })}
        </div>
    )
}
