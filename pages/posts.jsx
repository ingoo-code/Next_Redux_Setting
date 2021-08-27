import {useEffect} from 'react'
import { useSelector } from 'react-redux'
import wrapper from '../Providers/createCtx'
import {GET_POST} from '../reducers/post'
import {END} from 'redux-saga'

const posts = () => {

    return (
        <>
            <h1>Posts (10)</h1>
            <ul>
                <li>
                    <h2>게시물 제목</h2>
                    <span>게시물 내용</span>
                </li>
            </ul>
        </>
    )
}

export const getServerSideProps = wrapper.getServerSideProps( (Store)=> async (req,res)=> {
    // 첫번쨰는 dispatch 써서 API 요청을 보냅니다. 그리고 상태를 변경시킵니다.
    Store.dispatch(GET_POST())
    Store.dispatch(END)
    await Store.sagaTask.toPromise()
})

export default posts