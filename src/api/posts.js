// import axios from 'axios';

// n밀리세컨동안 기다리는 프로미스를 만들어주는 함수
const sleep = n => new Promise(resolve => setTimeout(resolve, n));

// 더미 데이터 목록
const posts = [
    {
        id: 1,
        title: '리덕스 미들웨어를 배워봅시다',
        body: '리덕스 미들웨어를 직접 만들어보면 이해하기 쉽죠.'
    },
    {
        id: 2,
        title: 'redux-thunk를 사용해봅시다',
        body: 'redux-thunk를 사용해서 비동기 작업을 처리해봅시다!'
    },
    {
        id: 3,
        title: 'redux-saga도 사용해봅시다',
        body:
        '나중엔 redux-saga를 사용해서 비동기 작업을 처리하는 방법도 배워볼 거예요.'
    }
];

// 게시글 목록을 가져오는 비동기 함수
export const getPosts = async () => {
    // FIXME: axios 사용하기전 코드
    await sleep(500); // 0.5초 쉬고
    return posts;

    // TODO: axios 사용
    // const response = await axios.get('http://localhost:4000/posts');
    // return response.data;
}

// id값으로 게시글을 조회하는 비동기 함수   
export const getPostById = async id => {
    // FIXME: axios 사용하기전 코드
    await sleep(500); // 0.5초 쉬고
    return posts.find(post => post.id === id); // id값이 동일한 값 반환

    // TODO: axios 사용
    // const response = await axios.get(`http://localhost:4000/post/${id}}`);
    // return response.data;
};