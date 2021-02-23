import { combineReducers } from "redux"
import postReducer from "./postReducer"
import photoReducer from "./photoReducer"

const rootReducer = combineReducers({
    posts: postReducer,
    photos: photoReducer
})

export default rootReducer;