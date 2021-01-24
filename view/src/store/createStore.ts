import { applyMiddleware, compose, createStore, Store } from 'redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import { ApplicationAction, ApplicationState, createRootReducer } from './index';



export default (initialState: Partial<ApplicationState> = {}) => {
    return createStore(
        createRootReducer,
        initialState,
        compose(
            applyMiddleware(
                thunk as ThunkMiddleware<ApplicationState, ApplicationAction>
            ),
        ),
    )
}