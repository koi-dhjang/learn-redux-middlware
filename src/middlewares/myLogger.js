const myLogger = store => next => action => {
    console.log(action); // action 출력

    const result = next(action); // 다음 미들웨어 ( 또는 리듀서 )에게 액션을 전달합니다

    console.log('\t', store.getState()); // 업데이트 이후의 상태 출력

    return result; // 여기서 반환하는 값은 dispatch(action)의 결과물이 됩니다. 기본 undefinded
}

export default myLogger;