import { AuthenticationActionTypes, LoginState } from './types';
import { ActionUnion, createAction } from '../createAction';

export const AuthenticationActions = {
    login: (p: LoginState) => createAction(AuthenticationActionTypes.LOGIN, p),
};

export type AuthenticationActions = ActionUnion<typeof AuthenticationActions>;