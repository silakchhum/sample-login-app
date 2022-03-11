import { SET_CREDENTIAL } from '../actions/auth';
const initialState = { email: '', password: '' };

const auth = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_CREDENTIAL:
            return { ...state, ...payload };
        default:
            return state
    }
}

export default auth;