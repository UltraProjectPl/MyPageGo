import { applyMiddleware, compose, createStore, Store } from 'redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import { ApplicationAction, ApplicationState, createRootReducer } from './index';
import { apiMiddleware } from './middleware/api';

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default (initialState: Partial<ApplicationState> = {}) => {
    return createStore(
        createRootReducer(),
        initialState,
        composeEnhancers(
            applyMiddleware(
                thunk as ThunkMiddleware<ApplicationState, ApplicationAction>,
                apiMiddleware,
            ),
        ),
    ) as Store<ApplicationState>
}