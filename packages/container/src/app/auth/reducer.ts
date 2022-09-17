import initial from './state';
import { Event, IAuthState, AuthEventType, User } from './types';

export const logoutRequested = (state: IAuthState): IAuthState => {
  return {
    ...state,
    user: null
  };
};

export const loginRequested = (
  state: IAuthState,
  user: User | null
): IAuthState => {
  return {
    ...state,
    user
  };
};

const reducer = (state: IAuthState = initial, event: Event): IAuthState => {
  switch (event.type) {
    case AuthEventType.LOG_IN_REQUESTED:
      return loginRequested(state, event.payload);
    case AuthEventType.LOG_OUT_REQUESTED:
      return logoutRequested(state);
    default:
      return state;
  }
};

export default reducer;
