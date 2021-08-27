export const initalState = {
    posts:[],
    postDetaill:null,
    loadding:false,
}

/* REDUX ACTIONS */
export const GET_POSTS_REQUEST = "GET_POSTS_REQUEST"
export const GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS"
export const GET_POSTS_FAIL = "GET_POSTS_FAIL"

export const GET_POST = () => {
    return {
        type:GET_POSTS_REQUEST
    }
}

const reducer = (state = initalState,action) => {
    switch(action.type){
        case GET_POSTS_REQUEST:
            return {
                ...state,
                posts:[...state.posts,...action.data],
                loadding:true
            }
        case GET_POSTS_SUCCESS:
            return {
                ...state,
                loadding:false,
            }
        case GET_POSTS_FAIL:
            return {
                ...state,
                loadding:false,
            }
        default:
            return state
    }
}

export default reducer