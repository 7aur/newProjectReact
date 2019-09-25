import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from 'redux-logger';
import { createPromise } from 'redux-promise-middleware'
import { mainReducer } from './reducer/blogReducer';
import { catReducer } from './reducer/categoryReducer';
export const StoreManager = createStore
    (
        combineReducers(
            {
                mainReducer,
                catReducer
            }
        ),
        {},
        applyMiddleware(
            createPromise(),
            createLogger()
        )
    );