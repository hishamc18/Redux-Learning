const intialCounterState = {
    count: 0
}

//first reducer
export const counterReducer = (state = intialCounterState, action) => {
    switch(action.type){
        case 'INCREMENT':
            return {count: state.count + 1}
        case 'DECREMENT':
            return {count: state.count - 1}
        case 'RESET':
            return {count: state.count = 0}
        default:
            return state;
    }
}



//second reducer
const intialUserState = {
    name: "",
    loggedIn: 'false'
}
export const userReducer = (state = intialUserState, action)=>{
    switch(action.type){
        case "LOGIN":
            return {...state, name:action.payload, loggedIn: true};
        case 'LOGOUT':
            return {...state, name:"", loggedIn: false};
        default:
            return state;
    }
};