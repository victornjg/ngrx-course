import { createAction, props } from "@ngrx/store";
import { User } from "./model/user.model";

// Action creation function
export const login = createAction(
  '[Login Page] User Login',
  props<{ user: User }>()
); // [the source of the action in the app] the name of the event that happened

export const logout = createAction(
  '[Top Menu] User Logout',
  props<{ user: User }>()
);