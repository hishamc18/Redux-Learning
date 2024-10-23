import { createStore } from "redux";

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

const store = createStore(counterReducer);
export default store;
