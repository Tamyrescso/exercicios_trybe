import { GET_CHARACTER, REQUEST_CHARACTER, GET_ERROR } from "../actions";

const INITIAL_STATE = {
    loading: false,
    character: null,
    error: '',
}

const reducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case REQUEST_CHARACTER:
            return {...state, loading: true};
        case GET_CHARACTER:
            return {...state, loading: false, character: action.character};
        case GET_ERROR:
            return {...state, loading: false, error: action.error}
        default:
            return state;
    }
}

export default reducer;