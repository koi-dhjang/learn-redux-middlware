import * as postsAPI from '../api/posts'; // api/posts 안의 함수 모두 불러오기
import {
  createPromiseThunk,
  reducerUtils,
  handleAsyncActions
} from '../lib/asyncUtils';
import * as Actions from './actions/postActions';

export const toggleForm = formState => {
    console.log(formState);
    
    return !formState;
};


// 아주 쉽게 thunk 함수를 만들 수 있게 되었습니다.
export const getPosts = createPromiseThunk(Actions.GET_POSTS, postsAPI.getPosts);
export const getPost = createPromiseThunk(Actions.GET_POST, postsAPI.getPostById);
export const addPost = createPromiseThunk(Actions.ADD_POST, postsAPI.addPost);
export const updatePost = createPromiseThunk(Actions.UPDATE_POST, postsAPI.updatePost);
export const deletePost = createPromiseThunk(Actions.DELETE_POST, postsAPI.deletePost);

// initialState 쪽도 반복되는 코드를 initial() 함수를 사용해서 리팩토링 했습니다.
const initialState = {
  posts: reducerUtils.initial(),
  post: reducerUtils.initial(),
  addShowForm: false,
  updateShowForm: false
};

// const nextId = 

export default function posts(state = initialState, action) {
  switch (action.type) {
    // 게시글 목록 조회
    case Actions.GET_POSTS:
    case Actions.GET_POSTS_SUCCESS:
    case Actions.GET_POSTS_ERROR:
      return handleAsyncActions(Actions.GET_POSTS, 'posts')(state, action);
    // 게시글 조회  
    case Actions.GET_POST:
    case Actions.GET_POST_SUCCESS:
    case Actions.GET_POST_ERROR:
      return handleAsyncActions(Actions.GET_POST, 'post')(state, action);
    // 게시글 추가
    case Actions.ADD_POST:
    case Actions.ADD_POST_SUCCESS:
    case Actions.ADD_POST_ERROR:
      return handleAsyncActions(Actions.ADD_POST, 'post')(state, action);
    // 게시글 수정
    case Actions.UPDATE_POST:
    case Actions.UPDATE_POST_SUCCESS:
    case Actions.UPDATE_POST_ERROR:
      return handleAsyncActions(Actions.UPDATE_POST, 'post')(state, action);
    // 게시글 삭제
    case Actions.DELETE_POST:
    case Actions.DELETE_POST_SUCCESS:
    case Actions.DELETE_POST_ERROR:
      return handleAsyncActions(Actions.DELETE_POST, 'post')(state, action);
    default:
      return state;
  }
}