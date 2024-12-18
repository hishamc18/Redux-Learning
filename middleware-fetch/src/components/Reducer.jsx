const intialState = {
    data: [],
    error: null,
    loading: false
}

export const dataReducer = (state = intialState, action)=>{
    switch(action.type){
        case 'FETCH_DATA_REQUEST':
            return {...state, loading: true}
        case 'FETCH_DATA_SUCCESS':
            return {...state, loading: false, data: action.payload}
        case 'FETCH_DATA_FAILURE':
            return {...state, loading: false, error: action.error}
        default:
            return state;
    }
}