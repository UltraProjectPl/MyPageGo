import { Dispatch, Middleware, MiddlewareAPI } from 'redux';
import { ApplicationAction, ApplicationState, ThunkDispatch } from '../index';

export const apiMiddleware: Middleware = (api: MiddlewareAPI<ThunkDispatch, ApplicationState>) => {
    return (next: Dispatch) => async (action: ApplicationAction) => {
        switch (action.type) {

        }
        return next(action);
    }

}