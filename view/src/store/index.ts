import { Action, combineReducers } from 'redux';
import { ThunkAction, ThunkDispatch as ThunkDispatchBase } from 'redux-thunk';
import { authenticationReducer } from './authentication/reducers';
import { AuthenticationActions } from './authentication/actions';

export type ApplicationAction =
    | AuthenticationActions
;

export const createRootReducer = () => combineReducers({
    authentication: authenticationReducer
});


export type ApplicationState = ReturnType<ReturnType<typeof createRootReducer>>;
export type ThunkResult<R> = ThunkAction<R, ApplicationState, {}, Action>;
export type ThunkDispatch = ThunkDispatchBase<ApplicationState, {}, Action>