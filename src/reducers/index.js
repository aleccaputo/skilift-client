import * as actions from '../action-types';
const initialAppState = {
    auth: {token: null, error: false}
};

export const appReducer = (state = initialAppState, action) => {
    switch (action.type) {
        case actions.LOGIN_SUCCESS:
            return {...state, auth: {...action.payload}};
        case actions.LOGIN_FAIL:
            return {...state, auth: {token: null, error: true}};
        default:
            return state;
    }
};