import {AuthenticationActionTypes, AuthenticationState} from './types';
import { Reducer } from 'redux';
import { AuthenticationActions } from './actions';

const initialState: AuthenticationState = {
    login: '',
    password: '',
    token: '',
}

export const authenticationReducer: Reducer<
    AuthenticationState,
    AuthenticationActions
> = (state = initialState, action) => {
    switch (action.type) {
        case AuthenticationActionTypes.LOGIN: {
            const payload = action.payload;
            console.log(payload);

            return state;
        }
        default: {
            return state;
        }
    }
}