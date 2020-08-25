//-------------- Core -----------------------------------------------------------------//
import { AppState } from './../../app.reducer';
import { createSelector } from '@ngrx/store';
//------------- State Variables -------------------------------------------------------//
export const getAuthAuthenticatedState = (state: AppState) => state.auth.authenticated;
export const getAuthUserObjState = (state: AppState) => state.auth.authUser;

//---------------Auth State Selectors --------------->
export const selectIsAuthenticated = createSelector(
  getAuthAuthenticatedState,
  isAuthenticated => isAuthenticated
);

export const selectAuthUser = createSelector(
  getAuthAuthenticatedState,
  authUser => authUser
);

