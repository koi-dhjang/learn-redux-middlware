import React from 'react';
import PostContainer from '../containers/PostContainer';
import { Outlet } from 'react-router-dom';

function PostListPage(){
    return (
        <>
            <PostContainer/>
            <Outlet/>
        </>
    );
}

export default PostListPage;