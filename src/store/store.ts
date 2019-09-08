import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from 'redux-logger';
import { createPromise } from 'redux-promise-middleware'
import { mainReducer } from './reducer/demoReducer';
    
export const StoreManager = createStore
    (
        combineReducers(
            {
                mainReducer
            }
        ),
        {},
        applyMiddleware(
            createPromise(),
            createLogger()
        )
    );