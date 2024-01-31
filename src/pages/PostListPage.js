import React from 'react';
import PostListContainer from './../containers/PostListContainer';
import PostFormContainer from '../containers/PostFormContainer';

function PostListPage(){
    return (
        <>
            <PostFormContainer />
            <PostListContainer />
        </>
    );
}

export default PostListPage;