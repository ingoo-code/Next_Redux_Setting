import {all,fork,takeLatest,call,put} from 'redux-saga/effects'
import axios from 'axios'

let BaseURL = process.env.NODE_ENV.backurl || 'https://jsonplaceholder.typicode.com'

async function getPostAPI(data = "") {
    const response = await axios.get(`${BaseURL}/posts/${data}`)
    return response
}

function* getPosts(){
    // API 통신 web server랑 통신을 하게될겁니다. fetch axios 
    try{
        const {data} = yield call(getPostAPI)
        yield put({
            type:'GET_POSTS_SUCCESS',
            data
        })
    } catch (e) {
        yield put({
            type:'GET_POST_FAIL',
            data:'ERROR'
        })
    }
}

function* watchPosts(){
    yield takeLatest('GET_POST_REQUEST',getPosts)
}

export default function* postSaga(){
    yield all([
        fork(watchPosts),
    ])
}