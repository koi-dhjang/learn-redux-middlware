import React from "react";
import { decrease, decreaseAshync, increase, increaseAsync } from "../modules/counter";
import { useSelector, useDispatch } from 'react-redux';
import Counter from "../components/Counter";


function CounterContainer(){
    const number = useSelector(state => state.counter);
    const dispatch = useDispatch();

    const onIncrease = () => {
        // dispatch(increase());
        dispatch(increaseAsync());
    };

    const onDecrease = () => {
        // dispatch(decrease());
        dispatch(decreaseAshync());
    }

    return (
        <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
    )
}

export default CounterContainer;