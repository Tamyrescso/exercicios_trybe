import { IS_LOGGED, CLIENT } from "../actions";

const INITIAL_STATE = {
    statusLogin: false,
    clients: [],
}

const reducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case IS_LOGGED:
            return {
                ...state,
                statusLogin: action.statusLogin,
            }
        case CLIENT:
            return {
                ...state,
                clients: state.clients.concat(action.clients)
            }
        default:
            return state;
    }
};

export default reducer;
