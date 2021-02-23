const initalState = [

]

const postReducer = (state = initalState, action) => {
    const { type, payload} = action;
    switch(type){
        case "ADD_POST": {
            return [...state, {
                id: payload.id,  
                title: payload.title,
                description: payload.description,
                comments: [],
                likes: 0
              }];
        }
        case "LIKE_POST": {
            const copyState = [...state];
            // find post by id and update likes
            const index = copyState.findIndex(x => x.id === payload);
            copyState[index].likes += 1
            return [...copyState]
          }
        case "POST_REPLY":
        console.log(payload)
        const copyState = [...state];
        const index = copyState.findIndex(x => x.id === payload.postId);
        copyState[index].comments.unshift(payload.comment)
        return [...copyState]
        default:
            return state;      
    }
}

export default postReducer;