import { createSelector } from "@ngrx/store";
import { AppState } from "../reducers";
import { AuthState } from "./reducers";

export const isLoggedIn = createSelector(
  (state: AppState) => state.auth,
  (auth: AuthState) => !!auth.user
);

// This selector is not being used, I just created it to 
// demonstrate that we can combine multiple selectors.
export const isLoggedOut = createSelector(
  isLoggedIn,
  (isLoggedIn) => !isLoggedIn
);