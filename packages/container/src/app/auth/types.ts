export interface User {
  id: string;
  name: string;
  email: string;
}

export enum AuthEventType {
  SIGN_IN_REQUESTED = 'auth/sign_in_requested',
  LOG_IN_REQUESTED = 'auth/log_in_requested',
  LOG_OUT_REQUESTED = 'auth/log_out_requested'
}

export interface LoginRequestedEvent {
  type: AuthEventType.LOG_IN_REQUESTED;
  payload: User | null;
}

export interface LogoutRequestedEvent {
  type: AuthEventType.LOG_OUT_REQUESTED;
}

export type Event = LoginRequestedEvent | LogoutRequestedEvent;

export interface IAuthState {
  user: User | null;
}
