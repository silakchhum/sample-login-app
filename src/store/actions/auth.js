export const SET_CREDENTIAL = 'SET_CREDENTIAL';

export const login = (email, password, callback) => {
    return dispatch => {
        dispatch({
            type: SET_CREDENTIAL,
            payload: { email, password }
        });
        callback();
    }
}