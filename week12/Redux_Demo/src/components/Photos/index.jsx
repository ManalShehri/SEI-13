import axios from 'axios'
import React, {useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";

export default function Photos(props) {
    const dispatch = useDispatch();
    const photos = useSelector((state) => state.photos)
    
    useEffect(()=>{
        if(photos.allPhotos.length < 1){

            dispatch({
                type: "SET_STATE_PHOTO",
                payload: {
                    loading: true,
                }
            })

            axios.get('https://picsum.photos/v2/list?limit=7')
            .then(res=>{
                console.log(res.data)
                dispatch({
                    type: "SET_STATE_PHOTO",
                    payload: {
                        loading: false,
                        allPhotos: res.data
                    }
                })
            })
            .catch(err=>{
                dispatch({
                    type: "SET_STATE_PHOTO",
                    payload: {
                        loading: false,
                        error: true
                    }
                })
            })
        }
    },[])

    return (
        <div>
            <h1>photos</h1>
            <h1>{photos.loading && "Loading"}</h1>
            {photos && photos.allPhotos.map(p=>{
                return <div key={p.id}>
                    <h3>{p.author}</h3>
                    <img src={p.download_url} alt="" width="300px" height="300px"/>
                </div>
            })}
        </div>
    )
}