import { store } from '../store';
import { AuthEventType, User } from './types';

export const loginRequested = async (user: User | null) => {
  store.dispatch({
    type: AuthEventType.LOG_IN_REQUESTED,
    payload: user
  });
};

export const logoutRequested = async () => {
  store.dispatch({
    type: AuthEventType.LOG_OUT_REQUESTED
  });
};
