import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementAsync } from '../redux/store';

const Counter = () => {
    const count = useSelector((state) => state.count); 
    const dispatch = useDispatch();

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => dispatch(incrementAsync(2000))}>Increment after 2 second</button>
            <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
            <button onClick={()=> dispatch({type: 'RESET'})}>Reset</button>
        </div>
    );
};

export default Counter;