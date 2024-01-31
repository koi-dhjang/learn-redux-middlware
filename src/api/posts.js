import axios from "axios";

// 게시글 목록을 가져오는 비동기 함수
export const getPosts = async () => {
    // TODO: axios 사용
    const response = await axios.get('http://localhost:4000/posts');
    return response.data;
}

// id값으로 게시글을 조회하는 비동기 함수   
export const getPostById = async id => {
  const response = await axios.get(`http://localhost:4000/posts/${id}`);
  return response.data;
};

// 게시글을 추가하는 비동기 함수
export const addPost = async ( title, content ) => {
    let id = 0;
    axios.get('http://localhost:4000/posts')
    .then(res => {
        id = res.data[res.data.length-1].id +1;
        console.log('길이 확인', res.data.length);
        console.log('길이 확인', res.data.length-1);
        console.log('res확인 : ', res);
        console.log('마지막id값 : ', res.data[res.data.length-1].id);
        console.log('다음id값 : ', id);
    }).catch(e => {
        console.log('에러발생', e);
    })

    const response = await axios.post('http://localhost:4000/posts', { id, title, content });
    return response.data;
}

// 게시글을 수정하는 비동기 함수
export const updatePost = async id => {
    const response = await axios.put(`http://localhost:4000/posts/${id}`);
    return response.data;
}

// 게시글을 삭제하는 비동기 함수
export const deletePost = async id => {
    const response = await axios.delete(`http://localhost:4000/posts/${id}`);
    return response.data;
}
