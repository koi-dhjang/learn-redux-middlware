// 액션타입 - 원래는 중복 방지를 위해 'counter/INCREASE'식으로 접두사를 붙였음
// import { increase } from './counter';
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';

// 기존 액션생성함수
export const increase = () => ({ type : INCREASE });
export const decrease = () => ({ type : DECREASE });

// thunk 사용 -> 기존에는 객체 형태로만 반환했다면 함수형태로 조작가능
// getState 사용 안할시엔 파라미터로 받아올 필요없음 : 원래도 받아왔나? 기억안남;
export const increaseAsync = () => dispatch => {
    setTimeout(() => dispatch(increase()), 1000);
}
export const decreaseAshync = () => dispatch => {
    setTimeout(() => dispatch(decrease()), 1000);
}

// 초기값 - 기존에는 객체 방식으로 초기화했지만 단순 숫자로 초기화해도 이상x
const initialState = 0;

export default function counter(state = initialState, action){
    switch(action.type){
        case INCREASE:
            return state + 1;
        case DECREASE:
            return state - 1;
        default:
            return state;
    }
}