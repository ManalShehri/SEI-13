import React, {useState} from 'react'
import './style.css'
import { v4 as uuid } from 'uuid';
import { useDispatch } from "react-redux"

export default function AddPost(props) {

    const dispatch = useDispatch();

    const [post, setPost] = useState({})
    
    const handleOnChange = (e) => {
        setPost({...post, [e.target.name]: e.target.value})
    }

    const handleSubmit = () => {
        let newPost = {...post, id: uuid()}
        if(props.reply){
            // add comment
            dispatch({
                type: "POST_REPLY",
                payload: {
                    comment: newPost,
                    postId: props.postId
                }
            })
        }else{
            // add post
            console.log(newPost)
            dispatch({
                type: "ADD_POST",
                payload: newPost
            })
        }
    }

    return (
        <div className="newPost">
            {!props.reply && <input placeholder="Enter title" name="title" onChange={(e)=> handleOnChange(e)} />}
           <input placeholder="Enter description" name="description" onChange={(e)=> handleOnChange(e)} />
           <button onClick={handleSubmit}>submit</button>
        </div>
    )
}
