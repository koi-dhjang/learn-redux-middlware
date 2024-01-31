import React from 'react';
import PostListContainer from './../containers/PostListContainer';
import PostFormContainer from '../containers/PostFormContainer';

function PostListPage(){
    return (
        <>
            {/* 게시글 작성하는 컴포넌트 */}
            <PostFormContainer />
            {/* 게시글 목록을 보여주는 컴포넌트 */}
            <PostListContainer />
        </>
    );
}

export default PostListPage;