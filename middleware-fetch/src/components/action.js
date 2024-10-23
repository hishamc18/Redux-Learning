export const fetchData = () =>{
    return async (dispatch) =>{
        dispatch({type: 'FETCH_DATA_REQUEST'});
        try {
            const resposne = await fetch('https://jsonplaceholder.typicode.com/posts')
            const data = await resposne.json();
            dispatch({type: "FETCH_DATA_SUCCESS", payload: data});
        } catch (error) { 
            dispatch({type: "FETCH_DATA_FAILURE", payload: error.message})
        }
    }
}