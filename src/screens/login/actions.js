import {LOGIN_FAIL, LOGIN_SUCCESS} from "../../action-types";

export const login = async (username, password, dispatch) => {
    try {
        const res = await fetch('http://localhost:8000/login', {
            body: JSON.stringify({username, password}),
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (!res.ok) {
            dispatch({type: LOGIN_FAIL});
            return null;
        }
        const token = await res.json();
        dispatch({type: LOGIN_SUCCESS, payload: {token}})
    } catch (e) {
        dispatch({type: LOGIN_FAIL});
    }
};