const initalState = {
    allPhotos: [],
    loading: false,
    error: false
}

const photoReducer = (state = initalState, action) => {
    const { type, payload } = action;
    switch (type) {
      case "SET_STATE_PHOTO": 
        return {...state, ...payload }
      default:
        return state;
    }
  };
  
  export default photoReducer;