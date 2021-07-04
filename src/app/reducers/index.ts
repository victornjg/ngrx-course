import { createReducer } from '@ngrx/store';
import { AuthState, initialAuthState } from '../auth/reducers';

export interface AppState {
  auth: AuthState,
}

export const initialAppState: AppState = {
  auth: initialAuthState
}

export const appReducer = createReducer(
  initialAppState,
)
