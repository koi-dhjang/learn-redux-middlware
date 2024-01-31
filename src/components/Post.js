import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deletePost } from "../modules/posts";

function Post({ post }){
    const { title, body } = post;
    // const { showForm, setShowForm } = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // TODO: store에 저장된 값 가져오기
    let state = useState( state => {return state});
    let showForm = useSelector( state => {return state.posts.showForm});


    // TODO: navigate를 사용하여 뒤로가기 기능 구현
    const goBack = () => {
        navigate(-1); // -1이면 바로 이전 페이지
        // navigate('/'); // url을 입력하면 해당 url로 이동
    }

    // TODO: 단순 게시글 조회와 수정폼을 전환
    const toggleForm = () => {
        console.log('selector : ', showForm);
        
        return ;
    }


    // TODO: dispatch를 통해 redux store의 updatePost() 호출하여 수정처리
    const updateBtn = () => {
        dispatch(updateBtn())
    }


    // TODO: dispatch를 통해 redux store의 deletePost() 호출하여 삭제처리
    const deleteBtn = () => {
        dispatch(deletePost(post.id));
        // 성공하면 성공 메시지와 함께 홈으로 이동
        console.log('삭제 성공');
        navigate('/');
        // 실패하면 실패 메시지와 함께 에러로그 출력
        // console.log('삭제 실패');
    }


    return(
        <>
            <div>
                <button onClick={goBack}>
                    뒤로가기
                </button>
            </div>
            <div>
                <button onClick={toggleForm}>
                    수정
                </button>
                <button onClick={deleteBtn}>
                    삭제
                </button>
            </div>
            { !showForm ? (
            <div>
                <h1>{ title }</h1>
                <p>{ body }</p>
            </div>) 
            : (
                <div>
                    <p> 제목 : 
                        <input type="text" value={title}/>
                    </p>
                    <p>
                        내용 : 
                        <input type="text" value={body} />
                    </p>
                </div>)}
        </>
    );
}

export default Post;