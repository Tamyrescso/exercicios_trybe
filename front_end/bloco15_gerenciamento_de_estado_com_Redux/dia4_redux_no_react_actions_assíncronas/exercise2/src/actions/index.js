import charAPI from "../services/charAPI";

export const REQUEST_CHARACTER = 'REQUEST_CHARACTER';
export const GET_CHARACTER = 'GET_CHARACTER';
export const GET_ERROR = 'GET_ERROR';

function requestCharacter() {
    return {type: REQUEST_CHARACTER, loading: true}
}

function getCharacter(success) {
    console.log(success[0])
    return {type: GET_CHARACTER, loading: false, character: success[0]}
}

function failedFetchCharacter(error) {
    return {type: GET_ERROR, loading: false, error}
}
export function fetchCharacter(char) {
    return async (dispatch) => {
        dispatch(requestCharacter());
        try{
            const response = await charAPI(char);
            return dispatch(getCharacter(response));
        } catch (error) {
            return dispatch(failedFetchCharacter(error));
        }
    }
}