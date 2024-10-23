import { createStore, applyMiddleware } from "redux";
import { thunk } from 'redux-thunk';



//middleware example with mimicing a delay for counter
export const incrementAsync = (delay) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch({ type: 'INCREMENT' });
        }, delay);
    };
};



const intialState = {
    count: 0,
};

function counterReducer(state = intialState, action) {
    switch (action.type) {
        case "INCREMENT":
            return { count: state.count + 1 };
        case "DECREMENT":
            return { count: state.count - 1 };
        case "RESET":
            return { count: (state.count = 0) };
        default:
            return state;
    }
}

const store = createStore(counterReducer, applyMiddleware(thunk));
export default store;