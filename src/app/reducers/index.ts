import { createReducer } from '@ngrx/store';

export interface AppState {

}

export const initialAppState: AppState = {

}

export const appReducer = createReducer(
  initialAppState,
)
