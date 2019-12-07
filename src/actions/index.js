import { 
    LIST_USERS_FILTERED_BY_TAG,
    SIGN_IN,
    SIGN_OUT
} from './types';

export const signIn = (userId, password) => async (dispatch) => {
    const data = {
        'mail': email,
        'password': password
    };

    return fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    }).then(res => res.json())
        .then(res => dispatch({
            type: SIGN_IN,
            payload: res
        }));


}