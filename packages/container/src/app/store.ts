import {
  combineReducers,
  configureStore,
  createListenerMiddleware
} from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import AuthReducer from './auth/reducer';

export const listenerMiddleware = createListenerMiddleware();

const middlewares = [listenerMiddleware.middleware];

if (process.env.NODE_ENV !== 'production') {
  middlewares.push(createLogger());
}

const reducer = combineReducers({ auth: AuthReducer });

export const store = configureStore({
  reducer,
  middleware: middlewares
});

export type IStore = ReturnType<typeof store.getState>;
