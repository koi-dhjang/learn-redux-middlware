import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost, getPosts, toggleForm } from "../modules/posts";

function PostFormContainer() {
    const [ datas, setDatas ] = useState('');
    const [ title, setTitle ] = useState('');
    const [ body, setBody ] = useState('');


    // TODO: useSelector()로 스토어에서 상태값을 가져오고
    const post = useSelector( state => state.post);

    // TODO: useDispatch()로 스토어에 상태값을 변경


    // TODO: input입력값이 변경되면 실행되는 함수
    const handleChange = e => {
        setDatas({
            ...datas,
            [e.target.name]: e.target.value
        })
        console.log(datas);
    }

    // TODO: 제출버튼을 클릭하면 발생하는 함수
    const handleSubmit = e => {
        e.preventDefault(); // 이건 왜 막는지 모르겠음?

        setDatas({
            ...datas,
            [e.target.name]: e.target.value
        })

        dispatch(addPost(datas.title, datas.body));

        dispatch(getPosts());

        setTitle('');
        setBody('');
    }

    const dispatch = useDispatch();

    // const { isShowForm, setIsShowForm } = useSelector(state => state.posts.addShowForm);

    // let isShowForm = useSelector(state => state.posts.addShowForm);

    // const toggleBtn = () => {
    //     console.log('정상작동확인');
    //     console.log(isShowForm);
    //     dispatch(setIsShowForm(isShowForm));
    //     console.log(isShowForm);
    // }

    const addBtn = () => {
        console.log('동작확인');
    };

    return (
        <>
            <div>
                <form onSubmit={handleSubmit}>
                    <p>제목 : 
                        <input 
                        type="text" 
                        name="title"
                        value={datas.title}
                        onChange={handleChange}
                        title={title} 
                        />    
                    </p> 
                    <p>내용 : 
                        <input 
                        type="text" 
                        name="body"
                        value={datas.body}
                        onChange={handleChange} 
                        body={body}
                        />    
                    </p> 
                    <button type="submit">글쓰기</button>
                </form>
            </div>
        </>
    )
}

export default PostFormContainer;